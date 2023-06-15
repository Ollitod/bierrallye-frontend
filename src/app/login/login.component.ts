import {Component, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../shared/service/auth/auth.service';
import {Router} from '@angular/router';
import {IAuth} from '../shared/model/auth.model';
import {TokenService} from '../shared/service/token/token.service';
import {UserService} from '../shared/service/user/user.service';
import {Role} from '../shared/model/role';
import {Subscription, switchMap} from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  loginForm = new FormGroup({
    username: new FormControl('', {validators: [Validators.required]}),
    password: new FormControl('', {validators: [Validators.required]})
  });

  sub: Subscription | undefined;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private tokenService: TokenService,
    private userService: UserService
  ) {
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  authenticate(): void {
    this.sub = this.authService.authenticate(this.loginForm.getRawValue() as IAuth).pipe(
      switchMap(response => {
        this.tokenService.storeToken(response.token);
        this.userService.loginUser();
        return this.userService.user;
      })).subscribe(user => {
        if (user?.role) {
          const routeByRole = this.getRouteByRole(user?.role);
          console.log(routeByRole);
          this.router.navigate([routeByRole]);
          this.toastr.success('Login erfolgreich', 'Erfolgreich');
        }
      },
      error => {
        this.toastr.error('Username/Passwort falsch', 'Fehler');
      });
  }

  private getRouteByRole(role: Role): string {
    switch (role) {
      case Role.ADMIN:
        return '/admin';
      case Role.USER:
        return '/race';
      case Role.EMPLOYEE:
        return '/penalty'
      default:
        return '/';
    }
  }
}

import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../shared/service/auth.service';
import {Router} from '@angular/router';
import {IAuth} from '../shared/model/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', {validators: [Validators.required]}),
    password: new FormControl('', {validators: [Validators.required]})
  });

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  login(): void {
    this.authService.login(this.loginForm.getRawValue() as IAuth).subscribe(
      response => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/admin']);
        this.toastr.success('Login erfolgreich', 'Erfolgreich');
      },
      error => {
        console.log(error);
        this.toastr.error('Username/Passwort falsch', 'Fehler');
      }
    );
  }
}

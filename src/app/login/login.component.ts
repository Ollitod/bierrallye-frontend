import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ToastrService} from 'ngx-toastr';
import {LoginService} from '../shared/service/login.service';
import {Router} from '@angular/router';

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
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  login(): void {
    this.loginService.login().subscribe(
      res => {
        this.router.navigate(['/admin']);
        this.toastr.success('Login erfolgreich', 'Erfolgreich');
      },
      error => {
        this.toastr.error('Username/Passwort falsch', 'Fehler');
      }
    );
  }
}

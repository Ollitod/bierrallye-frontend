import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DeregisterService} from '../../shared/service/deregister/deregister.service';
import {ToastrService} from 'ngx-toastr';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-deregister',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './deregister.component.html',
  styleUrls: ['./deregister.component.scss']
})
export class DeregisterComponent {

  deregisterForm = new FormGroup({
    token: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(36),
        Validators.maxLength(36)
      ]
    }),
  });

  constructor(
    private deregisterService: DeregisterService,
    private toastr: ToastrService) {
  }

  deregister(): void {
    this.deregisterService.deregister(this.deregisterForm.getRawValue()).subscribe(
      res => {
        this.toastr.success('Schade, dass ihr eure Teilnahme storniert habt', 'Erfolgreich');
      },
      error => {
        if (error.status === 400) {
          this.toastr.warning('Ihr habt euch bereits abgemeldet', 'Achtung');
        } else {
          this.toastr.error('Ein unbekannter Fehler ist aufgetreten', 'Fehler');
        }
      }
    );
  }
}

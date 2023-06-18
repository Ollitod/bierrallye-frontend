import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {DrinkService} from '../../shared/service/backend/drink/drink.service';
import {IDrink} from '../../shared/model/drink.model';
import {IStartblock} from '../../shared/model/startblock.model';
import {StartblockService} from '../../shared/service/backend/startblock/startblock.service';
import {RegistrationService} from '../../shared/service/backend/registration/registration.service';
import {IRegistration} from '../../shared/model/registration.model';
import {ToastrService} from 'ngx-toastr';
import {AvailableSpotsComponent} from '../available-spots/available-spots.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    AvailableSpotsComponent
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    player1: new FormControl('', {validators: [Validators.required]}),
    player2: new FormControl('', {validators: [Validators.required]}),
    drink1: new FormControl(0, {validators: [Validators.required]}),
    drink2: new FormControl(0, {validators: [Validators.required]}),
    startblock: new FormControl(0, {validators: [Validators.required]}),
    email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    dsgvoApproved: new FormControl(false, {validators: [Validators.required]})
    // player1: new FormControl('Oliver', {validators: [Validators.required]}),
    // player2: new FormControl('Johannes', {validators: [Validators.required]}),
    // drink1: new FormControl(1, {validators: [Validators.required]}),
    // drink2: new FormControl(2, {validators: [Validators.required]}),
    // startblock: new FormControl(3, {validators: [Validators.required]}),
    // email: new FormControl('olivertod11@yahoo.de', {validators: [Validators.required, Validators.email]}),
    // dsgvoApproved: new FormControl(true, {validators: [Validators.required]})
  });

  drinks: IDrink[] = [];
  startblocks: IStartblock[] = [];
  totalSpots: number = 0;
  availableSpots: number = 0;

  constructor(
    private drinksService: DrinkService,
    private startblockService: StartblockService,
    private registrationService: RegistrationService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.drinksService.getDrinks().subscribe(drinks => this.drinks = drinks);
    this.startblockService.getStartblocks().subscribe(startblocks => {
      this.startblocks = startblocks.startblocks;
      this.totalSpots = startblocks.totalSpots;
      this.availableSpots = startblocks.availableSpots;
    });
  }

  sendRegistration(): void {
    this.registrationService.register(this.registerForm.getRawValue() as IRegistration).subscribe(
      res => {
        this.registerForm.reset({
          player1: '',
          player2: '',
          drink1: 0,
          drink2: 0,
          startblock: 0,
          email: '',
          dsgvoApproved: false
        });
        this.toastr.success('Die Anmeldung war erfolgreich', 'Prost!');
      },
      error => {
        this.toastr.error('Die Anmeldung war nicht erfolgreich', 'Fehler')
      }
    );
  }
}

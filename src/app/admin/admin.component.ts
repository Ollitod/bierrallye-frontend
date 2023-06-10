import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IRegistration} from '../shared/model/registration.model';
import {ColumnSpec, DynamicTableModule} from 'ngx-gepardec-mat';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {_MatCheckboxRequiredValidatorModule, MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {ITeam} from '../shared/model/team.model';
import {TeamService} from '../shared/service/team.service';
import {ToastrService} from 'ngx-toastr';
import {RegistrationService} from '../shared/service/registration.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, DynamicTableModule, MatButtonModule, MatIconModule, FormsModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, _MatCheckboxRequiredValidatorModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  columnSpecs: ColumnSpec<IRegistration>[] = [
    {
      displayedColumn: 'player1',
      header: 'Spieler 1'
    },
    {
      displayedColumn: 'player2',
      header: 'Spieler 2'
    },
    {
      displayedColumn: 'active',
      header: 'Aktiv'
    },
    {
      displayedColumn: 'email',
      header: 'Email'
    },
    {
      displayedColumn: 'drink1',
      header: 'Getränk 1'
    },
    {
      displayedColumn: 'drink2',
      header: 'Getränk 2'
    },
    {
      displayedColumn: 'startblock',
      header: 'Startblock'
    },
    {
      displayedColumn: 'apply',
      header: 'Übernehmen'
    }
  ];

  currentRegistration: IRegistration | undefined = undefined;

  registrations: IRegistration[] = [];

  teamForm = new FormGroup({
    teamFirstMember: new FormControl('', {validators: [Validators.required]}),
    teamSecondMember: new FormControl('', {validators: [Validators.required]}),
    chipId: new FormControl('', {validators: [Validators.required]}),
  });

  constructor(
    private registrationService: RegistrationService,
    private teamService: TeamService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.registrationService.getRegistrations().subscribe(registrations => {
      this.registrations = registrations;
    });
  }

  fillTeam(registration: IRegistration): void {
    this.currentRegistration = registration;
    this.teamForm.controls.teamFirstMember.setValue(registration.player1);
    this.teamForm.controls.teamSecondMember.setValue(registration.player2);
    this.teamForm.controls.teamFirstMember.disable();
    this.teamForm.controls.teamSecondMember.disable();
  }

  createTeam() {
    this.teamService.create(this.teamForm.getRawValue() as ITeam).subscribe(
      res => {
        this.currentRegistration = undefined;
        this.teamForm.reset();
        this.toastr.success('Das Team ist startklar', 'Prost!');
      },
      error => {
        if (error.error) {
          this.toastr.error(error.error, 'Fehler');
        } else {
          this.toastr.error('Beim anlegen des Teams ist ein unbekannter Fehler aufgetreten', 'Fehler');
        }
      }
    );
  }
}

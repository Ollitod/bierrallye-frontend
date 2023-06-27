import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IRegistration} from '../shared/model/registration.model';
import {ColumnSpec, DynamicTableModule} from 'ngx-gepardec-mat';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {_MatCheckboxRequiredValidatorModule, MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {RegistrationService} from '../shared/service/backend/registration/registration.service';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {TeamDialogComponent} from './team-dialog/team-dialog.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, DynamicTableModule, MatButtonModule, MatIconModule, FormsModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, ReactiveFormsModule, _MatCheckboxRequiredValidatorModule, MatCardModule, MatDialogModule],
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

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
      header: 'Aktiv',
      width: '75px'
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
      header: 'Übernehmen',
      width: '150px'
    }
  ];

  registrations: IRegistration[] = [];

  constructor(
    private registrationService: RegistrationService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.registrationService.getRegistrations().subscribe(registrations => {
      this.registrations = registrations;
    });
  }

  openTeamDialog(registration: IRegistration): void {
    this.dialog.open(TeamDialogComponent,
      {
        data: registration,
        minWidth: '50%',
        minHeight: '50%'
      }
    );
  }
}

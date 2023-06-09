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
import {IDrink} from '../shared/model/drink.model';
import {IStartblock} from '../shared/model/startblock.model';
import {DrinkService} from '../shared/service/drink.service';
import {StartblockService} from '../shared/service/startblock.service';
import {ITeam} from '../shared/model/team.model';
import {TeamService} from '../shared/service/team.service';
import {ToastrService} from 'ngx-toastr';

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

  protected readonly registrations = registrations;

  currentRegistration: IRegistration | undefined = undefined;

  drinks: IDrink[] = [];
  startblocks: IStartblock[] = [];

  teamForm = new FormGroup({
    player1: new FormControl('', {validators: [Validators.required]}),
    player2: new FormControl('', {validators: [Validators.required]}),
    chip: new FormControl('', {validators: [Validators.required]}),
  });

  constructor(
    private drinksService: DrinkService,
    private startblockService: StartblockService,
    private teamService: TeamService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.drinksService.getDrinks().subscribe(drinks => this.drinks = drinks);
    this.startblockService.getStartblocks().subscribe(startblocks => {
      this.startblocks = startblocks.startblocks;
    });
  }

  fillTeam(registration: IRegistration): void {
    this.currentRegistration = registration;
    this.teamForm.controls.player1.setValue(registration.player1);
    this.teamForm.controls.player2.setValue(registration.player2);
    this.teamForm.controls.player1.disable();
    this.teamForm.controls.player2.disable();
  }

  createTeam() {
    this.teamService.create(this.teamForm.getRawValue() as ITeam).subscribe(
      res => {
        this.currentRegistration = undefined;
        this.teamForm.reset();
        this.toastr.success('Das Team ist startklar', 'Prost!');
      },
      error => {
        this.toastr.error('Das Team konnte nicht angelegt werden', 'Fehler')
      }
    );
  }

  getDrinkName(id: number): string | undefined {
    return this.drinks.find(drink => drink.id === id)?.name;
  }

  getStartblockName(id: number): string | undefined {
    return this.startblocks.find(startblock => startblock.id === id)?.name;
  }
}

const registrations: IRegistration[] = [
  {
    player1: 'Oliver',
    player2: 'Johannes',
    drink1: 1,
    drink2: 2,
    email: 'olivertod11@yahoo.de',
    startblock: 1,
    active: true,
    dsgvoApproved: true,
    uuid: '1234-5678'
  },
  {
    player1: 'Fabio',
    player2: 'Lukas',
    drink1: 3,
    drink2: 4,
    email: 'irgendwas@yahoo.de',
    startblock: 2,
    active: true,
    dsgvoApproved: true,
    uuid: '4321-5678'
  },
  {
    player1: 'Philipp',
    player2: 'Simon',
    drink1: 5,
    drink2: 5,
    email: 'nochmal-irgendwas@yahoo.de',
    startblock: 3,
    active: false,
    dsgvoApproved: true,
    uuid: '1234-8765'
  }
]

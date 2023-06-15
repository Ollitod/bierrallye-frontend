import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PenaltyService} from '../shared/service/penalty/penalty.service';
import {ToastrService} from 'ngx-toastr';
import {IStation} from '../shared/model/station.model';
import {ITeam} from '../shared/model/team.model';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators} from '@angular/forms';
import {IPenalty} from '../shared/model/penalty.model';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-penalty',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatOptionModule, MatSelectModule],
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.scss']
})
export class PenaltyComponent implements OnInit {

  stations: IStation[] = [];
  teams: ITeam[] = [];

  penaltyForm = new FormGroup({
    stationId: new FormControl<number | null>({value: null, disabled: true}, {nonNullable: false}),
    teamId: new FormControl<number | null>(null, {validators: [Validators.required], nonNullable: false}),
    minutes: new FormControl<number | null>(null, {validators: [Validators.required], nonNullable: false}),
    comment: new FormControl(''),
  });

  @ViewChild('formDirective') formDirective: FormGroupDirective | undefined;

  selectedStationId: number | undefined;
  showForm = false;

  constructor(
    private penaltyService: PenaltyService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.penaltyService.getStations().subscribe(stations => this.stations = stations);
    this.penaltyService.getTeams().subscribe(teams => {
      this.teams = teams;
      console.log(teams)
    });
    // validation is not performed on disabled controls, so required validator has to be set explicitly on the form itself
    this.penaltyForm.setValidators((form) => Validators.required(this.penaltyForm.controls.stationId));
  }

  initPenaltyForm(stationId: number) {
    this.selectedStationId = stationId;
    this.showForm = true;
    this.penaltyForm.controls.stationId.patchValue(stationId);
  }

  createPenalty() {
    this.penaltyService.createPenalty(this.penaltyForm.getRawValue() as IPenalty).subscribe(
      response => {
        this.formDirective?.resetForm();
        if (this.selectedStationId) {
          this.penaltyForm.controls.stationId.patchValue(this.selectedStationId);
        }
        this.toastr.success(response, 'Erfolgreich');
      },
      error => {
        this.toastr.error(error.error, 'Fehler');
      }
    );
  }

  back(): void {
    this.penaltyForm.reset();
    this.showForm = false;
  }
}

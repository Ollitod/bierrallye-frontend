import {Component, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PenaltyService} from '../shared/service/backend/penalty/penalty.service';
import {ToastrService} from 'ngx-toastr';
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
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-penalty',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatOptionModule, MatSelectModule],
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.scss']
})
export class PenaltyComponent implements OnInit {

  @ViewChild('formDirective') formDirective: FormGroupDirective | undefined;

  teams: ITeam[] = [];
  extractedBoxIds: number[] = [];
  stationId: number | undefined;

  penaltyForm = new FormGroup({
    stationId: new FormControl<number | null>({value: null, disabled: true}, {nonNullable: false}),
    teamId: new FormControl<number | null>(null, {validators: [Validators.required], nonNullable: false}),
    boxId: new FormControl<number | null>(null, {nonNullable: false}),
    minutes: new FormControl<number | null>(null, {validators: [Validators.required], nonNullable: false}),
    comment: new FormControl(''),
  });

  constructor(
    private penaltyService: PenaltyService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // retrieve id from active route and update form
    this.stationId = Number(this.route.snapshot.paramMap.get('id'));
    this.patchStationId();

    this.penaltyService.getTeamsByStationId(this.stationId).subscribe(teams => {
      if (teams.length === 0) {
        this.toastr.warning(
          `Bei Station ${this.stationId} können keine Strafminuten mehr erfasst werden, da diese bereits alle Teams passiert haben.`,
          'Keine Erfassung möglich',
          {
            progressBar: true
          }
        );
        this.back();
      }
      this.teams = teams.sort((a, b) => a.teamFirstMember.localeCompare(b.teamFirstMember));
      this.extractedBoxIds = teams.map(team => team.boxId).sort((a, b) => a - b);
    });
    // validation is not performed on disabled controls, so required validator has to be set explicitly on the form itself
    this.penaltyForm.setValidators((form) => Validators.required(this.penaltyForm.controls.stationId));
  }

  private patchStationId() {
    this.penaltyForm.controls.stationId.patchValue(this.stationId || null);
  }

  teamSelectionChange(teamId: number) {
    console.log(teamId, this.getBoxIdByTeamId(teamId))
    this.penaltyForm.controls.boxId.patchValue(this.getBoxIdByTeamId(teamId) || null);
  }

  boxIdSelectionChange(boxId: number) {
    this.penaltyForm.controls.teamId.patchValue(this.getTeamIdByBoxId(boxId) || null);
  }

  private getBoxIdByTeamId(teamId: number): number | undefined {
    return this.teams.find(team => team.teamId === teamId)?.boxId;
  }

  private getTeamIdByBoxId(boxId: number): number | undefined {
    return this.teams.find(team => team.boxId === boxId)?.teamId;
  }

  createPenalty() {
    const boxId = this.penaltyForm.controls.boxId.getRawValue();
    this.penaltyService.createPenalty(this.penaltyForm.getRawValue() as IPenalty).subscribe(
      response => {
        this.formDirective?.resetForm();
        this.patchStationId();
        this.removeTeamsFromSelectionModels(boxId);
        this.toastr.success(response, 'Erfolgreich');
      },
      error => {
        this.toastr.error(error.error, 'Fehler');
      }
    );
  }

  private removeTeamsFromSelectionModels(boxId: number | null) {
    // remove from team selection model
    this.teams = [
      ...this.teams.filter(team => team.boxId !== boxId)
    ]

    // remove from boxId selection model
    this.extractedBoxIds = [
      ...this.extractedBoxIds.filter(extractedBoxId => extractedBoxId !== boxId)
    ]
  }

  back(): void {
    this.router.navigate(['/penalty']);
  }
}

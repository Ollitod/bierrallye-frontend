import {Component, Inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ITeam} from '../../shared/model/team.model';
import {TeamService} from '../../shared/service/backend/team/team.service';
import {ToastrService} from 'ngx-toastr';
import {IRegistration} from '../../shared/model/registration.model';

@Component({
  selector: 'app-team-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, FormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.scss']
})
export class TeamDialogComponent implements OnInit {

  teamForm = new FormGroup({
    teamFirstMember: new FormControl({value: '', disabled: true}, {validators: [Validators.required]}),
    teamSecondMember: new FormControl({value: '', disabled: true}, {validators: [Validators.required]}),
    uuid: new FormControl({value: '', disabled: true}, {validators: [Validators.required]}),
    startblock: new FormControl({value: '', disabled: true}, {validators: [Validators.required]}),
    email: new FormControl({value: '', disabled: true}, {validators: [Validators.required]}),
    boxId: new FormControl<number | null>(null, {validators: [Validators.required]}),
  });

  encodedURL: string | undefined;
  createTeamDisabled = false;

  constructor(
    private teamService: TeamService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public registration: IRegistration
  ) {
  }

  ngOnInit(): void {
    this.teamService.get(this.registration.uuid).subscribe(
      team => {
        this.teamForm.patchValue(team);
        this.teamForm.controls.boxId.disable();
        this.disableCreateTeamButton();
      },
      () => {
        this.teamForm.patchValue({
          ...this.registration,
          teamFirstMember: this.registration.player1,
          teamSecondMember: this.registration.player2,
          startblock: (this.registration.startblock as any).name,
        });
      }
    );

    const channel = new BroadcastChannel('qr-login');
    channel.onmessage = (event) => {
      if (event.data === 'initialized') {
        this.sendMessageToQrLogin();
      }
    };
  }

  createTeam() {
    this.teamService.create(this.teamForm.getRawValue() as ITeam).subscribe(
      res => {
        this.toastr.success('Das Team ist startklar', 'Prost!');
        this.disableCreateTeamButton();
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

  generateLoginQrCode() {
    const email = this.teamForm.controls.email.value;
    const uuid = this.teamForm.controls.uuid.value;

    this.encodedURL = window.location.origin + `/login/?username=${email}&uuid=${uuid}`;

    // Open new window
    window.open(
      window.location.origin + '/qr-login',
      '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes'
    );
  }

  sendMessageToQrLogin() {
    const channel = new BroadcastChannel('qr-login');
    channel.postMessage({encodedURL: this.encodedURL});
  }

  disableCreateTeamButton() {
    this.createTeamDisabled = true;
  }
}

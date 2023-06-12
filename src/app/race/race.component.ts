import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebcamModule} from 'ngx-webcam';
import {MatButtonModule} from '@angular/material/button';
import {ITeam} from '../shared/model/team.model';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [CommonModule, WebcamModule, MatButtonModule],
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  scannerOpenCheckin = false;
  scannerOpenCheckout = false;

  team: ITeam = {
    startblock: 'Startblock A: 13:30 Uhr',
    teamFirstMember: 'Oliver Tod',
    teamSecondMember: 'Johannes Meinhard',
    // startTime: new Date(2023, 6, 12, 17, 35, 48),
    // endTime: new Date(2023, 6, 12, 19, 48, 25),
    uuid: 'random',
    email: 'olivertod11@yahoo.de',
    boxId: 1
  }

  openScannerCheckin(): void {
    this.scannerOpenCheckin = !this.scannerOpenCheckin;
  }

  openScannerCheckout(): void {
    this.scannerOpenCheckout = !this.scannerOpenCheckout;
  }

  facingMode: string = 'environment'; // Set rear camera

  public get videoOptions(): MediaTrackConstraints {
    const result: MediaTrackConstraints = {};
    if (this.facingMode && this.facingMode !== '') {
      result.facingMode = {ideal: this.facingMode};
    }
    return result;
  }
}

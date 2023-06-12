import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebcamModule} from 'ngx-webcam';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [CommonModule, WebcamModule, MatButtonModule],
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent {

  open = false;

  setOpen(): void {
    this.open = true;
    console.log('camera opened');
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

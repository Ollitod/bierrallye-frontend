import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WebcamModule} from 'ngx-webcam';
import {MatButtonModule} from '@angular/material/button';
import {ITeam} from '../shared/model/team.model';
import {switchMap} from 'rxjs';
import {UserService} from '../shared/service/user.service';
import {IUser} from '../shared/model/user.model';
import {TeamService} from '../shared/service/team.service';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [CommonModule, WebcamModule, MatButtonModule],
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  scannerOpenCheckin = false;
  scannerOpenCheckout = false;

  team: ITeam | undefined = undefined;
  user: IUser | undefined = undefined;

  constructor(
    private userService: UserService,
    private teamService: TeamService
  ) {
  }

  ngOnInit(): void {
    this.userService.user.pipe(
      switchMap(user => {
        this.user = user;
        return this.teamService.get(user?.uuid || '');
      })
    ).subscribe(team => this.team = team);
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

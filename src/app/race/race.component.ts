import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {ITeam} from '../shared/model/team.model';
import {Subscription, switchMap} from 'rxjs';
import {UserService} from '../shared/service/user.service';
import {IUser} from '../shared/model/user.model';
import {TeamService} from '../shared/service/team.service';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {CheckInService} from '../shared/service/check-in.service';
import {CheckOutService} from '../shared/service/check-out.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-race',
  standalone: true,
  imports: [CommonModule, MatButtonModule, ZXingScannerModule],
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit, OnDestroy {

  scannerOpenCheckin = false;
  scannerOpenCheckout = false;

  team: ITeam | undefined = undefined;
  user: IUser | undefined = undefined;

  sub: Subscription | undefined;

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private checkInService: CheckInService,
    private checkOutService: CheckOutService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.sub = this.userService.user.pipe(
      switchMap(user => {
        this.user = user;
        return this.teamService.get(user?.uuid || '');
      })
    ).subscribe(team => this.team = team);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  openScannerCheckin(): void {
    this.scannerOpenCheckin = !this.scannerOpenCheckin;
  }

  openScannerCheckout(): void {
    this.scannerOpenCheckout = !this.scannerOpenCheckout;
  }

  checkIn(url: string) {
    this.scannerOpenCheckin = false;
    this.checkInService.checkIn(url).subscribe(
      team => {
        this.team = team;
        this.toastr.success('Lauf! Es geht um Leben und Tod', 'Eingecheckt')
      },
      error => {
        this.toastr.error(error, 'Fehler');
      }
    );
  }

  checkOut(url: string) {
    this.scannerOpenCheckout = false;
    this.checkOutService.checkOut(url).subscribe(
      team => {
        this.team = team;
        this.toastr.success('Glückwunsch! Ihr seid angekommen', 'Ausgecheckt')
      },
      error => {
        console.log(error);
        this.toastr.error(error, 'Fehler');
      }
    );
  }
}

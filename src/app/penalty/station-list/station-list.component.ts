import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {IStation} from '../../shared/model/station.model';
import {PenaltyService} from '../../shared/service/backend/penalty/penalty.service';
import {MatCardModule} from '@angular/material/card';
import {PenaltyComponent} from '../penalty.component';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-station-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule, PenaltyComponent, RouterOutlet, RouterLink],
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.scss']
})
export class StationListComponent implements OnInit {

  stations: IStation[] = [];
  isDetailActive = false;

  constructor(
    private penaltyService: PenaltyService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.penaltyService.getStations().subscribe(stations => this.stations = stations);
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(event => event as NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/penalty') {
          this.isDetailActive = false;
        }
      });
  }
}

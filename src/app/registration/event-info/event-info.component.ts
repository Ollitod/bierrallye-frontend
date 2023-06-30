import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {APP_MODE} from '../../shared/service/backend/configuration';

@Component({
  selector: 'app-event-info',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent {

  protected readonly APP_MODE = APP_MODE;
}

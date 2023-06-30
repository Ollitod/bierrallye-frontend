import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {EventInfoComponent} from '../event-info/event-info.component';
import {APP_MODE} from '../../shared/service/backend/configuration';

@Component({
  selector: 'app-general-info',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink, EventInfoComponent],
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent {

  protected readonly APP_MODE = APP_MODE;
}

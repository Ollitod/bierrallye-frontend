import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-available-spots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './available-spots.component.html',
  styleUrls: ['./available-spots.component.scss']
})
export class AvailableSpotsComponent {

  @Input() totalSpots: number = 0;
  @Input() availableSpots: number = 0;
}

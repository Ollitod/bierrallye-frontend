import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralInfoComponent} from '../general-info/general-info.component';
import {InfoComponent} from '../info/info.component';
import {UserInteractionComponent} from '../user-interaction/user-interaction.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, GeneralInfoComponent, InfoComponent, UserInteractionComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

}

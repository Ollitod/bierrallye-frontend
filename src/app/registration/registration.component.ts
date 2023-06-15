import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralInfoComponent} from './general-info/general-info.component';
import {HardfactsComponent} from './hardfacts/hardfacts.component';
import {UserInteractionComponent} from './user-interaction/user-interaction.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, GeneralInfoComponent, HardfactsComponent, UserInteractionComponent],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

}

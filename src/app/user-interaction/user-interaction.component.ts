import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeregisterComponent} from '../deregister/deregister.component';
import {MatTabsModule} from '@angular/material/tabs';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-user-interaction',
  standalone: true,
  imports: [CommonModule, DeregisterComponent, MatTabsModule, RegisterComponent],
  templateUrl: './user-interaction.component.html',
  styleUrls: ['./user-interaction.component.scss']
})
export class UserInteractionComponent {

}

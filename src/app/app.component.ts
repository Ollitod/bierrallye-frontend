import {Component} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {DeregisterComponent} from './deregister/deregister.component';
import {RegisterComponent} from './register/register.component';
import {MatTabsModule} from '@angular/material/tabs';
import {InfoComponent} from './info/info.component';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    InfoComponent,
    MatTabsModule,
    RegisterComponent,
    DeregisterComponent,
    FooterComponent
  ]
})
export class AppComponent {
}

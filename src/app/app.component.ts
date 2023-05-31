import {Component} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {InfoComponent} from './info/info.component';
import {HeaderComponent} from './header/header.component';
import {RouterOutlet} from '@angular/router';
import {GeneralInfoComponent} from './general-info/general-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    InfoComponent,
    FooterComponent,
    RouterOutlet,
    GeneralInfoComponent
  ]
})
export class AppComponent {
}

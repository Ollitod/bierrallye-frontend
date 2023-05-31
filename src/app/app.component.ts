import {Component} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {InfoComponent} from './info/info.component';
import {HeaderComponent} from './header/header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    InfoComponent,
    FooterComponent,
    RouterOutlet
  ]
})
export class AppComponent {
}

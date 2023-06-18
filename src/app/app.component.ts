import {Component, OnInit} from '@angular/core';
import {FooterComponent} from './layout/footer/footer.component';
import {HardfactsComponent} from './registration/hardfacts/hardfacts.component';
import {HeaderComponent} from './layout/header/header.component';
import {RouterOutlet} from '@angular/router';
import {GeneralInfoComponent} from './registration/general-info/general-info.component';
import {TokenService} from './shared/service/frontend/token/token.service';
import {UserService} from './shared/service/backend/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    HardfactsComponent,
    FooterComponent,
    RouterOutlet,
    GeneralInfoComponent
  ]
})
export class AppComponent implements OnInit {

  constructor(
    private tokenService: TokenService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    if (!this.tokenService.isExpired()) {
      this.userService.loginUser();
    }
  }
}

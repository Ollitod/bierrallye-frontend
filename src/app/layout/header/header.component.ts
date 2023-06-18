import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {IUser} from '../../shared/model/user.model';
import {UserService} from '../../shared/service/backend/user/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  user: IUser | undefined = undefined;

  userSub: Subscription | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userSub = this.userService.user.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

  logout(): void {
    this.userService.logout();
  }
}

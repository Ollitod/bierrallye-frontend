import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {IUser} from '../shared/model/user.model';
import {Role} from '../shared/model/role';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, MatButtonModule],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    user: IUser = {
        username: 'Admin',
        role: Role.ADMIN
    }
}

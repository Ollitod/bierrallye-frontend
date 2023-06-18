import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IUser} from '../../../model/user.model';
import {HttpClient} from '@angular/common/http';
import {TokenService} from '../../frontend/token/token.service';
import {Router} from '@angular/router';
import {BASE_API_URL} from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<IUser | undefined> = new BehaviorSubject<IUser | undefined>(undefined);

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {
  }

  public loginUser(): void {
    this.http.get<IUser>(BASE_API_URL + 'user').subscribe(user => this.user.next(user));
  }

  public logout(): void {
    this.invalidateUser();
    this.router.navigate(['/login']);
  }

  invalidateUser() {
    this.user.next(undefined);
    this.tokenService.removeToken();
  }
}

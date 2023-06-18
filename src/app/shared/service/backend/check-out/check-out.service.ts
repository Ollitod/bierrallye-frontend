import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user/user.service';
import {Observable, throwError} from 'rxjs';
import {ITeam} from '../../../model/team.model';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  private readonly endpoint: string = 'https://bierrallye.meinhard.at/track/checkOut';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
  }

  checkOut(url: string): Observable<ITeam> {
    console.log(url);
    if (url !== this.endpoint) {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    console.log(this.userService.user.value);
    return this.http.post<ITeam>(this.endpoint, this.userService.user.value?.uuid);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {ITeam} from '../model/team.model';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  private readonly endpoint: string = 'https://bierrallye.meinhard.at/track/checkIn';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
  }

  checkIn(url: string): Observable<ITeam> {
    if (url !== this.endpoint) {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    console.log(this.userService.user.value);
    return this.http.post<ITeam>(this.endpoint, this.userService.user.value?.uuid);
  }
}

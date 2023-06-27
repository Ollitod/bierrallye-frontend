import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user/user.service';
import {Observable, throwError} from 'rxjs';
import {ITeam} from '../../../model/team.model';
import {BASE_API_URL} from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {

  private readonly endpoint: string = BASE_API_URL + 'track/checkOut';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
  }

  checkOut(uuid?: string): Observable<ITeam> {
    return this.http.post<ITeam>(this.endpoint, uuid);
  }

  validatedCheckOut(url: string): Observable<ITeam> {
    if (url !== this.endpoint) {
      return throwError(() => 'QR-Code nicht gültig!');
    }
    return this.checkOut(this.userService.user.value?.uuid);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITeam} from '../model/team.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  register(team: ITeam): Observable<any> {
    return this.http.post('https://bierrallye.meinhard.at/bierrallye/register', team);
  }
}

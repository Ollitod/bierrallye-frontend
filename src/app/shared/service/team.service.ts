import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITeam} from '../model/team.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {
  }

  create(team: ITeam): Observable<any> {
    return this.http.post('https://bierrallye.meinhard.at/bierrallye/completion/team', team);
  }
}

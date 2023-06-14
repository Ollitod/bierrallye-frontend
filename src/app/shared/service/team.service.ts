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

  create(team: ITeam): Observable<string> {
    return this.http.post('https://bierrallye.meinhard.at/completion/team', team,
      {
        responseType: 'text'
      }
    );
  }

  get(uuid: string): Observable<ITeam> {
    return this.http.get<ITeam>(`https://bierrallye.meinhard.at/track/team/${uuid}`);
  }
}

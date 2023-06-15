import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStation} from '../model/station.model';
import {ITeam} from '../model/team.model';
import {IPenalty} from '../model/penalty.model';

@Injectable({
  providedIn: 'root'
})
export class PenaltyService {

  constructor(
    private http: HttpClient
  ) {
  }

  getStations(): Observable<IStation[]> {
    return this.http.get<IStation[]>('https://bierrallye.meinhard.at/penalty/stations');
  }

  getTeams(): Observable<ITeam[]> {
    return this.http.get<ITeam[]>('https://bierrallye.meinhard.at/penalty/teams');
  }

  createPenalty(penalty: IPenalty): Observable<string> {
    return this.http.post('https://bierrallye.meinhard.at/penalty', penalty,
      {
        responseType: 'text'
      }
    );
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStation} from '../../../model/station.model';
import {ITeam} from '../../../model/team.model';
import {IPenalty} from '../../../model/penalty.model';
import {BASE_API_URL} from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class PenaltyService {

  constructor(
    private http: HttpClient
  ) {
  }

  getStations(): Observable<IStation[]> {
    return this.http.get<IStation[]>(BASE_API_URL + 'penalty/stations');
  }

  getTeamsByStationId(stationId?: number): Observable<ITeam[]> {
    return this.http.get<ITeam[]>(BASE_API_URL + `penalty/teams/station/${stationId}`)
  }

  createPenalty(penalty: IPenalty): Observable<string> {
    console.log(penalty);
    return this.http.post(BASE_API_URL + 'penalty', penalty,
      {
        responseType: 'text'
      }
    );
  }
}

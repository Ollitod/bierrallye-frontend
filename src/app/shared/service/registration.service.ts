import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IRegistration} from '../model/registration.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  register(team: IRegistration): Observable<any> {
    return this.http.post('https://bierrallye.meinhard.at/registration', team);
  }
}

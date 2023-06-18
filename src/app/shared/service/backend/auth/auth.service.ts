import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAuth} from '../../../model/auth.model';
import {IAuthResponse} from '../../../model/auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(auth: IAuth): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>('https://bierrallye.meinhard.at/authenticate', auth);
  }
}

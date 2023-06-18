import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAuth} from '../../../model/auth.model';
import {IAuthResponse} from '../../../model/auth-response.model';
import {BASE_API_URL} from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(auth: IAuth): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(BASE_API_URL + 'authenticate', auth);
  }
}

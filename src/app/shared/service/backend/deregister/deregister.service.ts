import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_API_URL} from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class DeregisterService {

  constructor(private http: HttpClient) {
  }

  deregister(token: any): Observable<any> {
    return this.http.get<boolean>(BASE_API_URL + `registration/unsubscribe?token=${token.token}`);
  }
}

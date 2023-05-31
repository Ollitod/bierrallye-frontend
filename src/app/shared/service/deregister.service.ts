import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeregisterService {

  constructor(private http: HttpClient) {
  }

  deregister(token: any): Observable<any> {
    return this.http.get<boolean>(`http://81.173.84.153:8989/bierrallye/unsubscribe?token=${token.token}`);
  }
}

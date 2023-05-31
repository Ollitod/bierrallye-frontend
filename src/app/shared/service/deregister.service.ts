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
    return this.http.get<boolean>(`https://bierrallye.meinhard.at/bierrallye/unsubscribe?token=${token.token}`);
  }
}

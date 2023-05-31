import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http: HttpClient) {
  }

  verify(token: string): Observable<any> {
    return this.http.get(`https://bierrallye.meinhard.at/bierrallye/verify?token=${token}`);
  }
}

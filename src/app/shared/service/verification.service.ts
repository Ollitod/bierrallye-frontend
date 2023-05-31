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
    return this.http.get(`http://81.173.84.153:8989/bierrallye/verify?token=${token}`);
  }
}

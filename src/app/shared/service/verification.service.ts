import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http: HttpClient) {
  }

  verify(token: string): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(`https://bierrallye.meinhard.at/bierrallye/verify?token=${token}`,
      {
        headers,
        responseType: 'text'
      }
    );
  }
}

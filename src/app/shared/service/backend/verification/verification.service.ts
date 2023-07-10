import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_API_URL} from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor(private http: HttpClient) {
  }

  verify(token: string): Observable<string> {
    return this.http.get(BASE_API_URL + `registration/verify?token=${token}`,
      {
        responseType: 'text'
      }
    );
  }
}

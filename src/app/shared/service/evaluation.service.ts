import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IEvaluation} from '../model/evaluation.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(
    private http: HttpClient
  ) {
  }

  getEvaluations(): Observable<IEvaluation[]> {
    return this.http.get<IEvaluation[]>('https://bierrallye.meinhard.at/evaluation');
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IEvaluation} from '../../../model/evaluation.model';
import {BASE_API_URL} from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  constructor(
    private http: HttpClient
  ) {
  }

  getEvaluations(): Observable<IEvaluation[]> {
    return this.http.get<IEvaluation[]>(BASE_API_URL + 'evaluation');
  }
}

import {Injectable} from '@angular/core';
import {IDrink} from '../model/drink.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) {
  }

  getDrinks(): Observable<IDrink[]> {
    return this.http.get<IDrink[]>('https://bierrallye.meinhard.at/registration/drinks');
  }
}


const drinks: IDrink[] = [
  {
    id: 1,
    name: 'Bier'
  },
  {
    id: 2,
    name: 'Wein'
  },
  {
    id: 3,
    name: 'Schnaps'
  }
];

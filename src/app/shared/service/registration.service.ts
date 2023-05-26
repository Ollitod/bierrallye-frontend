import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ITeam} from '../model/team.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient,
              private snackbar: MatSnackBar) {
  }

  register(team: ITeam): boolean {
    console.log(team);
    this.snackbar.open('Successful', 'OK', {duration: 1000});
    //TBD

    return true;
  }
}

import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VerificationService} from '../shared/service/verification.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private verificationService: VerificationService,
    private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      switchMap(params => {
        const token = params['token'];
        return this.verificationService.verify(token)
      })
    ).subscribe(
      res => {
        this.toastr.success('Ihr habt euch erfolgreich verifiziert.', 'Erfolgreich');
      },
      error => {
        this.toastr.error('Das hat nicht geklappt.', 'Fehler');
      }
    )
  }
}

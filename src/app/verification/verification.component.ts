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

  successful = false;

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
        this.successful = true;
        this.toastr.success(res, 'Erfolgreich');
      },
      error => {
        if (error.status === 400) {
          this.successful = true;
          this.toastr.warning(error.error, 'Achtung');
        } else {
          this.toastr.error('Ein unbekannter Fehler ist aufgetreten', 'Fehler');
        }
      }
    )
  }
}

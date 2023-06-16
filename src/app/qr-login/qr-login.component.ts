import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxKjuaModule} from 'ngx-kjua';

@Component({
  selector: 'app-qr-login',
  standalone: true,
  imports: [CommonModule, NgxKjuaModule],
  templateUrl: './qr-login.component.html',
  styleUrls: ['./qr-login.component.scss']
})
export class QrLoginComponent implements OnInit, AfterViewInit {

  encodedURL: string | undefined;

  @ViewChild('imgBuffer') imageElement: ElementRef | undefined;

  image: HTMLImageElement | undefined = undefined;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    const channel = new BroadcastChannel('qr-login');

    channel.onmessage = (event) => {
      this.encodedURL = event.data.encodedURL;
      this.cdr.detectChanges();
    };

    channel.postMessage('initialized');
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.image = this.imageElement?.nativeElement, 500);
  }
}

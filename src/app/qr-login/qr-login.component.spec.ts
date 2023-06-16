import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QrLoginComponent} from './qr-login.component';

describe('QrLoginComponent', () => {
  let component: QrLoginComponent;
  let fixture: ComponentFixture<QrLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QrLoginComponent]
    });
    fixture = TestBed.createComponent(QrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

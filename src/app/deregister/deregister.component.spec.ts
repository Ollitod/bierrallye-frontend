import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeregisterComponent} from './deregister.component';

describe('DeregisterComponent', () => {
  let component: DeregisterComponent;
  let fixture: ComponentFixture<DeregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeregisterComponent]
    });
    fixture = TestBed.createComponent(DeregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

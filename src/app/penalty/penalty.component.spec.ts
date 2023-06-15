import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PenaltyComponent} from './penalty.component';

describe('PenaltyComponent', () => {
  let component: PenaltyComponent;
  let fixture: ComponentFixture<PenaltyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PenaltyComponent]
    });
    fixture = TestBed.createComponent(PenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

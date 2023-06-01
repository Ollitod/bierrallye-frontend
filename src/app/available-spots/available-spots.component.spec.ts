import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AvailableSpotsComponent} from './available-spots.component';

describe('AvailableSpotsComponent', () => {
  let component: AvailableSpotsComponent;
  let fixture: ComponentFixture<AvailableSpotsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AvailableSpotsComponent]
    });
    fixture = TestBed.createComponent(AvailableSpotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

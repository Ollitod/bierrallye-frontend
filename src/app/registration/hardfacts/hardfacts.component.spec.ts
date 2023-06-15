import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HardfactsComponent} from './hardfacts.component';

describe('HardfactsComponent', () => {
  let component: HardfactsComponent;
  let fixture: ComponentFixture<HardfactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HardfactsComponent]
    });
    fixture = TestBed.createComponent(HardfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

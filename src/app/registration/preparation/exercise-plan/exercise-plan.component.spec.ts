import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePlanComponent } from './exercise-plan.component';

describe('ExercisePlanComponent', () => {
  let component: ExercisePlanComponent;
  let fixture: ComponentFixture<ExercisePlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExercisePlanComponent]
    });
    fixture = TestBed.createComponent(ExercisePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamDialogComponent} from './team-dialog.component';

describe('TeamDialogComponent', () => {
  let component: TeamDialogComponent;
  let fixture: ComponentFixture<TeamDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TeamDialogComponent]
    });
    fixture = TestBed.createComponent(TeamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

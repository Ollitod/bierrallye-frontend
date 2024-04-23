import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisePlanComponent } from './exercise-plan/exercise-plan.component';

@Component({
  selector: 'app-preparation',
  standalone: true,
  imports: [CommonModule, ExercisePlanComponent],
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.scss']
})
export class PreparationComponent {

}

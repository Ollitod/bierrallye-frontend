import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {authGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'registration'
  },
  {
    path: 'registration',
    component: ContentComponent
  },
  {
    path: 'verify',
    loadComponent: () => import('./verification/verification.component').then(c => c.VerificationComponent)
  },
  {
    path: 'impressum',
    loadComponent: () => import('./impressum/impressum.component').then(c => c.ImpressumComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
  },
  {
    path: 'race',
    loadComponent: () => import('./race/race.component').then(c => c.RaceComponent),
    canActivate: [authGuard]
  },
  {
    path: 'evaluation',
    loadComponent: () => import('./evaluation/evaluation.component').then(c => c.EvaluationComponent)
  },
  {
    path: 'penalty',
    loadComponent: () => import('./penalty/penalty.component').then(c => c.PenaltyComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

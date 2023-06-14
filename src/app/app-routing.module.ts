import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerificationComponent} from './verification/verification.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {ContentComponent} from './content/content.component';
import {AdminComponent} from './admin/admin.component';
import {authGuard} from './shared/guards/auth.guard';
import {LoginComponent} from './login/login.component';
import {RaceComponent} from './race/race.component';
import {EvaluationComponent} from './shared/service/evaluation/evaluation.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'verify',
    component: VerificationComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'race',
    component: RaceComponent,
    canActivate: [authGuard]
  },
  {
    path: 'evaluation',
    component: EvaluationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

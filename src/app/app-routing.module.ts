import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerificationComponent} from './verification/verification.component';
import {UserInteractionComponent} from './user-interaction/user-interaction.component';

const routes: Routes = [
  {
    path: '',
    component: UserInteractionComponent
  },
  {
    path: 'verify',
    component: VerificationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

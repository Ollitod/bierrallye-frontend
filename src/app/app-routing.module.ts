import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerificationComponent} from './verification/verification.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {ContentComponent} from './content/content.component';
import {AdminComponent} from './admin/admin.component';
import {loginGuard} from './shared/guards/login.guard';

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
    canActivate: [loginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

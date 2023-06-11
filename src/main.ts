import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {provideAnimations} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app/app-routing.module';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideToastr} from 'ngx-toastr';
import {tokenInterceptor} from './app/shared/interceptors/token.interceptor';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, MatTabsModule),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([tokenInterceptor])
    ),
    provideToastr(),
  ]
})
  .catch(err => console.error(err));

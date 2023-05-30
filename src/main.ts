import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {provideAnimations} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app/app-routing.module';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import {provideToastr} from 'ngx-toastr';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, MatTabsModule),
    provideAnimations(),
    provideHttpClient(),
    provideToastr()
  ]
})
  .catch(err => console.error(err));

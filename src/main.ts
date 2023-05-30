import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {provideAnimations} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app/app-routing.module';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, MatTabsModule),
    provideAnimations()
  ]
})
  .catch(err => console.error(err));

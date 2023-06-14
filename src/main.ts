import {importProvidersFrom} from '@angular/core';
import {AppComponent} from './app/app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {provideAnimations} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app/app-routing.module';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideToastr} from 'ngx-toastr';
import {tokenInterceptor} from './app/shared/interceptors/token.interceptor';
import {DYNAMIC_TABLE_DEFAULT_CONFIG, DynamicTableConfig} from 'ngx-gepardec-mat';

export const TABLE_CONFIG: DynamicTableConfig = {
  rowColor: '#FDF1CD'
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, MatTabsModule),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([tokenInterceptor])
    ),
    provideToastr(),
    {
      provide: DYNAMIC_TABLE_DEFAULT_CONFIG,
      useValue: TABLE_CONFIG
    }
  ]
})
  .catch(err => console.error(err));

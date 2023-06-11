import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
  const token = localStorage.getItem('token');
  if (token) {
    const expirationDate = getTokenExpirationDate(token);
    if (expirationDate && expirationDate < new Date()) {
      // Token has expired, remove it from local storage and redirect to login page
      localStorage.removeItem('token');
      inject(ToastrService).warning('Token abgelaufen. Bitte erneut anmelden', 'Achtung');
      inject(Router).navigate(['/login'])
      return next(request);
    }

    request = request.clone({
      setHeaders: {
        Authorization: `${token}` // Set the token in the Authorization header
      }
    });
  }
  return next(request);
}

function getTokenExpirationDate(token: string): Date | null {
  const tokenParts = token.split('.');
  if (tokenParts.length === 3) {
    const payload = JSON.parse(atob(tokenParts[1]));
    if (payload && payload.exp) {
      return new Date(payload.exp * 1000);
    }
  }
  return null;
}

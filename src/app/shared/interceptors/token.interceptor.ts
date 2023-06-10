import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
  const token = localStorage.getItem('token');
  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `${token}` // Set the token in the Authorization header
      }
    });
  }
  return next(request);
}

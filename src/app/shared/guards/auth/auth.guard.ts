import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {TokenService} from '../../service/token/token.service';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const tokenService = inject(TokenService);

  const token = tokenService.getToken();
  if (token) {
    return true;
  } else {
    router.navigate(['/login']); // User is not authenticated, redirect to login page
    return false;
  }
};

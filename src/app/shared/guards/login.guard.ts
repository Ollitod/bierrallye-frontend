import {CanActivateFn, Router} from '@angular/router';
import {inject, Injector} from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const username = 'your_username';
  const password = 'your_password';
  const router = inject(Router);

  // Perform Basic HTTP authentication
  const base64Credentials = btoa(`${username}:${password}`);
  const authHeader = `Basic ${base64Credentials}`;

  // Simulate checking authentication with an API endpoint
  const isAuthenticated = authenticateUser(authHeader);

  if (isAuthenticated) {
    return true; // User is authenticated, allow access
  } else {
    router.navigate(['/']); // User is not authenticated, redirect to login page
    return false;
  }
};

function authenticateUser(authHeader: string): boolean {
  // Make an API call to authenticate the user
  // Replace this with your actual API endpoint or authentication logic
  // Return true if authentication is successful, false otherwise
  return false;
}

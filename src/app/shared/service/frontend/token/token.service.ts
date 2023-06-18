import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private readonly TOKEN: string = 'JWT';

  constructor() {
  }

  storeToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN);
  }

  isExpired(): boolean {
    const token = this.getToken();
    if (token) {
      const expirationDate = this.getTokenExpirationDate(token);
      if (expirationDate && expirationDate < new Date()) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  private getTokenExpirationDate(token: string): Date | null {
    const tokenParts = token.split('.');
    if (tokenParts.length === 3) {
      const payload = JSON.parse(atob(tokenParts[1]));
      if (payload && payload.exp) {
        return new Date(payload.exp * 1000);
      }
    }
    return null;
  }
}

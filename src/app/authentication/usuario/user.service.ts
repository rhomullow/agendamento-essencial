import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<any>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeJWT();
    }
  }

  private decodeJWT() {
    const token = this.tokenService.getToken();
    const user = jwtDecode(token);

    this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  storeToken(token: string) {
    this.tokenService.storeToken(token);
    this.decodeJWT();
  }

  logout() {
    this.tokenService.clearToken();
    this.userSubject.next({});
  }

  isLogged() {
    return this.tokenService.hasToken();
  }
}

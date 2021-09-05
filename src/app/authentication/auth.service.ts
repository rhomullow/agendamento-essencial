import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { UserService } from './usuario/user.service';

const URL = 'http://localhost:3000/user/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  authenticate(email: string, password: string): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        URL,
        {
          userName: email,
          password,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const authToken = response.headers.get('x-access-token') ?? '';
          this.userService.storeToken(authToken);
        })
      );
  }
}

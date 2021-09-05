import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('',{}),
    password: new FormControl('',{})
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.getRawValue();

      this.authService
        .authenticate(formData.email, formData.password)
        .subscribe(
          () => {
            this.router.navigate(['dashboard']);
          },
          (error) => {
            alert('Usuário ou senha inválido.');
            console.log(error);
          }
        );
    }
  }
}

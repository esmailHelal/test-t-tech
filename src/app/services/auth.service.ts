import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;
  constructor() {}

  login(token: any) {
    localStorage.setItem('token_t-tech', token);
    this.isAuth = true;
  }

  role(role: any) {
    localStorage.setItem('role', role);
   
  }

  checkUserAuth() {
    if (localStorage.getItem('token_t-tech')) {
      this.isAuth = true;
    }
  }

  signOut() {
    localStorage.removeItem('token_t-tech');
    localStorage.removeItem('role');
    this.isAuth = false;
  }

  getToken() {
    return localStorage.getItem('token_t-tech');
  }

  getRole() {
    return localStorage.getItem('role');
  }

  isUserAuth() {
    return this.isAuth;
  }
}

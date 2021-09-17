import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public stateAuth(): boolean {
    return !!localStorage.getItem('login');
  }

}

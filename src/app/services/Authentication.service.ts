// Authentication.Service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private usuarios = [
    { username: 'admin', password: 'admin' },
    { username: 'user', password: 'user' }
  ];
  private auth:boolean=false;

  public login(username: string, password: string): boolean {

    this.auth=false;
    this.usuarios.forEach(element => {
      this.auth=element.username==username && element.password==password;
      if(this.auth) return;
    });

    return this.auth;
  }

}

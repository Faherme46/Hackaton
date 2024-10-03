// login.component.ts
import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/Authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
 password: string = "";

 private autenticate: any;

  constructor() {
    this.autenticate=new AuthenticationService();
  }

  onSubmit() {
    console.log(this.username);
    if (this.autenticate.login(this.username, this.password)) {
      console.log('Login correcto');
      // Redirigir al dashboard o realizar otra acción
    } else {
      console.log('Login incorrecto');
      // Mostrar un mensaje de error
    }
  }

}

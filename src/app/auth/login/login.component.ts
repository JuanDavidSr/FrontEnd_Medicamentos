
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService],
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    email: new FormControl(''),
    password:new FormControl(''),
  })

  constructor(private authsvc:AuthService ,private router:Router) { }

  ngOnInit(): void {
  }

  async onLogin(){
    const {email,password} = this.loginForm.value
    try{
      const user = await this.authsvc.login(email,password);
      if(user){
        this.router.navigate(['/home']);
        alert('Bienvenido ' + email);
      }

    }catch(error){
      console.log(error)
      alert('Usuario no encontrado verifica la informacion');
    }
   
  }
}

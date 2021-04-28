
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
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

  constructor(private authsvc:AuthService) { }

  ngOnInit(): void {
  }

  onLogin(){

    const {email,password} = this.loginForm.value
    this.authsvc.login(email,password);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {FormGroup, FormControl} from'@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers :[AuthService],
})
export class RegisterComponent implements OnInit {
  registerForm= new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  })
  constructor(private authsvc:AuthService) { }

  ngOnInit(): void {
  }

  onRegister(){
    const{email,password} =this.registerForm.value;
    this.authsvc.register(email,password);
  }

}

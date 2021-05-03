import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import {FormGroup, FormControl} from'@angular/forms';
import { Router } from '@angular/router';


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
  constructor(private authsvc:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const{email,password} =this.registerForm.value;
    try{
      
       const user = await this.authsvc.register(email,password);
       if(user){
         this.router.navigate(['/home'])
       }
    }
    catch(error){
      console.log(error)
      alert('El usuario ya cuenta con una cuenta ó no puede ser creado');
    }
   
  }

}

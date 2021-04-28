import { Injectable } from '@angular/core';
//import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
//import {User} from 'firebase'; 
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
  //public user:User;

  constructor(public afAuth:AngularFireAuth) { }

  async login(email:string,password:string){
    const result = await this.afAuth.signInWithEmailAndPassword(email,password);
    return result;
  }
  async register(email:string,password:string){
    const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
    return result;
  }
  async logout(){
    await this.afAuth.signOut();
    
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}

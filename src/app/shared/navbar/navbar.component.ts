import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[AuthService],
})
export class NavbarComponent {
  
  public user:any;
  public user$: Observable<any> =this.authsvc.afAuth.user;

  constructor(private authsvc:AuthService) { }

 

  onLogout(){
    this.authsvc.logout();
    alert('Seccion Cerrada Exitosamente');
    
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[AuthService],
})
export class NavbarComponent implements OnInit {

  constructor(private authsvc:AuthService) { }

  async ngOnInit(): Promise<void> {
    console.log('navbar');
    const user = await this.authsvc.getCurrentUser()
    if(user){
      console.log('User->', user);
    }
  }

}

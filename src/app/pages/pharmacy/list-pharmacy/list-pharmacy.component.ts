import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-list-pharmacy',
  templateUrl: './list-pharmacy.component.html',
  styleUrls: ['./list-pharmacy.component.scss']
})
export class ListPharmacyComponent implements OnInit {
  navigationExtras:NavigationExtras={
    state:{
      value:null
    }
  };

  fakeData=[
    {
      name:'prueba',
      correo:'pruebas',
      direccion:'s',
      horarios:12
    }
  ]
  constructor(private  router:Router) { }

  ngOnInit(): void {
  }

  onGoToEditPharmacy(item:any): void{
    this.navigationExtras.state.value=item;
    this.router.navigate(['editPharmacy'],this.navigationExtras);
  }

  onGoToSeePharmacy(item:any): void{
    this.navigationExtras.state.value=item;
    this.router.navigate(['detailsPharmacy'],this.navigationExtras);
  }
  onGoToDeletePharmacy(item:any):any{
    alert('delete')
  }

}

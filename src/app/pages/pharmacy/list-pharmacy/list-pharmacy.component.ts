import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Validators } from '@angular/forms';
import { pharmacy } from '../../../shared/Models/employee.interface';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-list-pharmacy',
  templateUrl: './list-pharmacy.component.html',
  styleUrls: ['./list-pharmacy.component.scss']
})
export class ListPharmacyComponent implements OnInit {
  pharmacy$=this.pharmacysvc.pharmacy;
  navigationExtras:NavigationExtras={
    state:{
      value:null
    }
  };

  
  
  constructor(private  router:Router,private pharmacysvc: PharmacyService) { }

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
  async onGoToDeletePharmacy(phaId:string):Promise<void>{
    try {
     await this.pharmacysvc.onDeletePharmacy(phaId);

    } catch (error) {
      console.log(error)
    }
    alert('delete')
  }

}

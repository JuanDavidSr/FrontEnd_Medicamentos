import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { pharmacy } from '../../../shared/Models/employee.interface';
import { PharmacyService } from '../pharmacy.service';

@Component({
  selector: 'app-details-pharmacy',
  templateUrl: './details-pharmacy.component.html',
  styleUrls: ['./details-pharmacy.component.scss']
})
export class DetailsPharmacyComponent implements OnInit {
  navigationExtras:NavigationExtras={
    state:{
      value:null
    }
  };

  pharmacy:pharmacy= null;

  constructor(private router: Router,private pharmacysvc:PharmacyService) { 
    const navigation = this.router.getCurrentNavigation()
    this.pharmacy=navigation?.extras?.state?.value;

  }
  onGoToEditPharmacy(): void{
    this.navigationExtras.state.value=this.pharmacy;
    this.router.navigate(['editPharmacy'],this.navigationExtras);
  }

  async onGoToDeletePharmacy():Promise<void>{
    try {
     await this.pharmacysvc.onDeletePharmacy(this.pharmacy.id);
     alert('Eliminado')
     this.onGoBackToList();
    } catch (error) {
      console.log(error)
    }
   
  }

  onGoBackToList():void{
    this.router.navigate(['listPharmacy'])
  }
  ngOnInit(): void {
    if(typeof this.pharmacy == 'undefined'){
      this.router.navigate(['listPharmacy'])
    }
  }

}

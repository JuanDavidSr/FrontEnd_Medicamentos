import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { pharmacy } from '../../../shared/Models/employee.interface';

@Component({
  selector: 'app-edit-pharmacy',
  templateUrl: './edit-pharmacy.component.html',
  styleUrls: ['./edit-pharmacy.component.scss']
})
export class EditPharmacyComponent implements OnInit {
  pharmacy:pharmacy;
  pharmacyForm:FormGroup;
  private isEmail=''


  constructor(private router:Router,private fb:FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.pharmacy=navigation?.extras.state?.value;
    this.initForm();
   }

  ngOnInit(): void {
   
    if(typeof this.pharmacy == 'undefined'){
       this.router.navigate(['newPharmacy'])
    }else{
      this.pharmacyForm.patchValue(this.pharmacy);
    }
  }

  onSave():void{
    console.log('save',this.pharmacyForm.value);
  }

  private initForm():void{
    this.pharmacyForm = this.fb.group({
      name:['',[Validators.required]],
      correo:['',[Validators.required]],
      direccion:['',[Validators.required]],
      horarios:['',[Validators.required]],
    });
  }

  onGoBackToList():void{
    this.router .navigate(['listPharmacy'])
  }
}

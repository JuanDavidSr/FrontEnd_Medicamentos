import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pharmacy } from '../../Models/employee.interface';

@Component({
  selector: 'app-pharmacy-form',
  templateUrl: './pharmacy-form.component.html',
  styleUrls: ['./pharmacy-form.component.scss']
})
export class PharmacyFormComponent implements OnInit {
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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { pharmacy } from '../../Models/employee.interface';
import { PharmacyService } from '../../../pages/pharmacy/pharmacy.service';

@Component({
  selector: 'app-pharmacy-form',
  templateUrl: './pharmacy-form.component.html',
  styleUrls: ['./pharmacy-form.component.scss']
})
export class PharmacyFormComponent implements OnInit {
  pharmacy:pharmacy;
  pharmacyForm:FormGroup;
  private isEmail=''


  constructor(private router:Router,private fb:FormBuilder,private phasvc:PharmacyService) {
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

    if(this.pharmacyForm.valid){
      const pharmacy = this.pharmacyForm.value; 
      const pharmacyId = this.pharmacy?.id || null;
      this.phasvc.onSavePharmacy(pharmacy,pharmacyId)
      this.pharmacyForm.reset();
      alert('Creado')
    }
  }

  isValidField(field:string):string{
    const validateField = this.pharmacyForm.get(field);
    return (!validateField.valid && validateField.touched)
    ? 'is-invalid' : validateField.touched ? 'is.valid' : '';
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

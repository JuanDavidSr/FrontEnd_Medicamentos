import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PharmacyFormComponent } from './pharmacy-form.component';



@NgModule({
  declarations: [PharmacyFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],exports:[
    PharmacyFormComponent
  ]
})
export class PharmacyFormModule { }

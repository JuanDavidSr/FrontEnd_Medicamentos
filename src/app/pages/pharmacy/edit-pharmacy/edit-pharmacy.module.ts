import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPharmacyRoutingModule } from './edit-pharmacy-routing.module';
import { EditPharmacyComponent } from './edit-pharmacy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PharmacyFormModule } from '../../../shared/components/pharmacy-form/pharmacy-form.module';


@NgModule({
  declarations: [
    EditPharmacyComponent
  ],
  imports: [
    CommonModule,
    EditPharmacyRoutingModule,
    ReactiveFormsModule,
    PharmacyFormModule
  ]
})
export class EditPharmacyModule { }

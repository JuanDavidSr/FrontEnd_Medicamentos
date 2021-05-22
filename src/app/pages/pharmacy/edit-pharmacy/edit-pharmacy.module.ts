import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPharmacyRoutingModule } from './edit-pharmacy-routing.module';
import { EditPharmacyComponent } from './edit-pharmacy.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditPharmacyComponent
  ],
  imports: [
    CommonModule,
    EditPharmacyRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditPharmacyModule { }

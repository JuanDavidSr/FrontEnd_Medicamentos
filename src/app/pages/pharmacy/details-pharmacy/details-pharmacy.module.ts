import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPharmacyRoutingModule } from './details-pharmacy-routing.module';
import { DetailsPharmacyComponent } from './details-pharmacy.component';


@NgModule({
  declarations: [
    DetailsPharmacyComponent
  ],
  imports: [
    CommonModule,
    DetailsPharmacyRoutingModule
  ]
})
export class DetailsPharmacyModule { }

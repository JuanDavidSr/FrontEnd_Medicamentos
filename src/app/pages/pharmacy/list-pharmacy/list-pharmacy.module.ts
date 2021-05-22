import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPharmacyRoutingModule } from './list-pharmacy-routing.module';
import { ListPharmacyComponent } from './list-pharmacy.component';


@NgModule({
  declarations: [
    ListPharmacyComponent
  ],
  imports: [
    CommonModule,
    ListPharmacyRoutingModule
  ]
})
export class ListPharmacyModule { }

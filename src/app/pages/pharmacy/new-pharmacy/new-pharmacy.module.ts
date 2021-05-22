import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPharmacyRoutingModule } from './new-pharmacy-routing.module';
import { NewPharmacyComponent } from './new-pharmacy.component';
import { PharmacyFormModule } from '../../../shared/components/pharmacy-form/pharmacy-form.module';


@NgModule({
  declarations: [
    NewPharmacyComponent
  ],
  imports: [
    CommonModule,
    NewPharmacyRoutingModule,
    PharmacyFormModule
  ]
})
export class NewPharmacyModule { }

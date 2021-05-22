import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPharmacyComponent } from './details-pharmacy.component';

const routes: Routes = [{ path: '', component: DetailsPharmacyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPharmacyRoutingModule { }

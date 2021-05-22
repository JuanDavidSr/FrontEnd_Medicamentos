import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPharmacyComponent } from './new-pharmacy.component';

const routes: Routes = [{ path: '', component: NewPharmacyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPharmacyRoutingModule { }

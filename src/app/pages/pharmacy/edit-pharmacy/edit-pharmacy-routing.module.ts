import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPharmacyComponent } from './edit-pharmacy.component';

const routes: Routes = [{ path: '', component: EditPharmacyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPharmacyRoutingModule { }

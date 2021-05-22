import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPharmacyComponent } from './list-pharmacy.component';

const routes: Routes = [{ path: '', component: ListPharmacyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPharmacyRoutingModule { }

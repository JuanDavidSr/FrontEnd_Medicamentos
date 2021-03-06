import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
path:'',
redirectTo:'/home',
pathMatch:'full'
},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
 { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
{ path: 'list', loadChildren: () => import('./pages/doctors/list/list.module').then(m => m.ListModule) },
{ path: 'new', loadChildren: () => import('./pages/doctors/new/new.module').then(m => m.NewModule) },
{ path: 'details', loadChildren: () => import('./pages/doctors/details/details.module').then(m => m.DetailsModule) },
{ path: 'edit', loadChildren: () => import('./pages/doctors/edit/edit.module').then(m => m.EditModule) },
{ path: 'listPharmacy', loadChildren: () => import('./pages/pharmacy/list-pharmacy/list-pharmacy.module').then(m => m.ListPharmacyModule) },
{ path: 'newPharmacy', loadChildren: () => import('./pages/pharmacy/new-pharmacy/new-pharmacy.module').then(m => m.NewPharmacyModule) },
{ path: 'detailsPharmacy', loadChildren: () => import('./pages/pharmacy/details-pharmacy/details-pharmacy.module').then(m => m.DetailsPharmacyModule) },
{ path: 'editPharmacy', loadChildren: () => import('./pages/pharmacy/edit-pharmacy/edit-pharmacy.module').then(m => m.EditPharmacyModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

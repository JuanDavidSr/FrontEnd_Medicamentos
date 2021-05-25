import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from'@angular/fire/auth';
import { EmployeeFormModule } from './shared/components/employee-form/employee-form.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { PharmacyFormComponent } from './shared/components/pharmacy-form/pharmacy-form.component';
import { PharmacyFormModule } from './shared/components/pharmacy-form/pharmacy-form.module'; 



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    EmployeeFormModule,
    PharmacyFormModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

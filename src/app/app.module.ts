import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import { NavigateInLoginComponent } from './navigate-in-login/navigate-in-login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { EducationLoanComponent } from './education-loan/education-loan.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DatePipe } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration-page', component: RegistrationPageComponent },
  { path: 'navigate-in-login', component: NavigateInLoginComponent },
  { path: 'apply-loan', component: ApplyLoanComponent },
  { path: 'update-account', component: UpdateAccountComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistrationComponent,
    CustomerLoginComponent,
    ApplyLoanComponent,
    UpdateAccountComponent,
    NavigateInLoginComponent,
    RegistrationPageComponent,
    HomeComponent,
    EducationLoanComponent,
    PersonalLoanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

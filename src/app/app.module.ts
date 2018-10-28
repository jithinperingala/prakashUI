import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NotificationComponent } from 'src/app/core/services/notification/notification.component';
import { EmployeeRegistrationComponent } from 'src/app/modules/employee/employee-registration/employee-registration.component';
import { EmployeeSearchComponent } from 'src/app/modules/employee/employee-search/employee-search.component';
import { NavbarComponent } from 'src/app/modules/landingpage/navbar/navbar.component';
import { FooterComponent } from 'src/app/modules/landingpage/footer/footer.component';
import { EmployeeTypeComponent } from 'src/app/modules/employee/employee-type/employee-type.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeeModule } from 'src/app/modules/employee/employee.module';
import { LoginComponent } from './modules/login/login.component';
import { PaymentComponent } from './modules/employee/payment/payment.component';
import { PaymentSummaryComponent } from 'src/app/modules/employee/payment-summary/payment-summary.component';
import { EmployeeAllocationComponent } from './modules/employee/employee-allocation/employee-allocation.component';
import { EmployeeAttendenceComponent } from 'src/app/modules/employee/employee-attendence/employee-attendence.component';
import { LandingpageComponent } from './modules/landingpage/landingpage.component';
import { NotificationModule } from './core/services/notification/notification.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    EmployeeSearchComponent,
    NavbarComponent,
    FooterComponent,
    NotificationComponent,
    EmployeeTypeComponent,
    LoginComponent,
    PaymentComponent,
    PaymentSummaryComponent,
    EmployeeAllocationComponent,
    EmployeeAttendenceComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    NotificationModule,HttpClientModule, AppRoutingModule, EmployeeModule,SharedModule,ModalModule.forRoot()
  ],
  exports:[SharedModule],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }

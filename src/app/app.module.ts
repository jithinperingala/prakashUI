import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpClientModule } from '@angular/common/http'
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';

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
import { MeterialPurchaseComponent } from 'src/app/modules/accounts/meterial-purchase/meterial-purchase.component';
import { EmployeeAllocationComponent } from './modules/employee/employee-allocation/employee-allocation.component';
import { EmployeeAttendenceComponent } from 'src/app/modules/employee/employee-attendence/employee-attendence.component';

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
    MeterialPurchaseComponent,
    EmployeeAllocationComponent,
    EmployeeAttendenceComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MDBBootstrapModule.forRoot(), FormsModule, ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(), HttpClientModule, AppRoutingModule, EmployeeModule,SharedModule,NgSelectModule
  ],
  exports:[SharedModule]
  ,
  schemas: [NO_ERRORS_SCHEMA],
  providers: [{
    provide: NG_SELECT_DEFAULT_CONFIG,
    useValue: {
        notFoundText: 'Custom not found'
    }
}],
  bootstrap: [AppComponent]
})
export class AppModule { }

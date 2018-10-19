import { NgModule } from '@angular/core';
import{CommonModule}from'@angular/common'
import{FormsModule,ReactiveFormsModule}from '@angular/forms'

import { EmployeeComponent } from './employee.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { EmployeeAllocationComponent } from './employee-allocation/employee-allocation.component';
import { EmployeeAttendenceComponent } from './employee-attendence/employee-attendence.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    EmployeeRoutingModule,FormsModule,ReactiveFormsModule,CommonModule,SharedModule
  ],
  declarations: [EmployeeComponent, 
    EmployeeRegistrationComponent,
    EmployeeSearchComponent,
    EmployeeTypeComponent,
    PaymentComponent,
    PaymentSummaryComponent,
    EmployeeAllocationComponent,
    EmployeeAttendenceComponent,]
})
export class EmployeeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeRegistrationComponent } from 'src/app/modules/employee/employee-registration/employee-registration.component';
import { EmployeeSearchComponent } from 'src/app/modules/employee/employee-search/employee-search.component';
import { EmployeeTypeComponent } from './modules/employee/employee-type/employee-type.component';
import { LoginComponent } from './modules/login/login.component';
import { PaymentComponent } from './modules/employee/payment/payment.component';
import { PaymentSummaryComponent } from './modules/employee/payment-summary/payment-summary.component';
import { EmployeeAllocationComponent } from './modules/employee/employee-allocation/employee-allocation.component';
import { EmployeeAttendenceComponent } from 'src/app/modules/employee/employee-attendence/employee-attendence.component';

const mainRoute: Routes = [{ path: '', redirectTo: 'search', pathMatch: 'full' },
{ path: 'registration', component: EmployeeRegistrationComponent },
{ path: 'employee/edit/:id', component: EmployeeRegistrationComponent },
{ path: 'search', component: EmployeeSearchComponent },
{ path: 'employeeType', component: EmployeeTypeComponent },
{
  path: 'cashTransfer', component: PaymentComponent,
  data: {
    formData: { bulkPaymentMode: false }
  }
},
{
  path: 'payment', component: PaymentComponent,
  data: {
    formData: { bulkPaymentMode: true }
  }
},
{ path: 'employeeAllocation', component: EmployeeAllocationComponent },
{ path: 'employeeAttendence', component: EmployeeAttendenceComponent },
{ path: 'paymentSummary', component: PaymentSummaryComponent },
{ path: 'login', component: LoginComponent },
{ path: '**', redirectTo: 'registration' }]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(mainRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

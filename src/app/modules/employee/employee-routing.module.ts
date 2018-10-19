import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeTypeComponent } from './employee-type/employee-type.component';
import { EmployeeAllocationComponent } from './employee-allocation/employee-allocation.component';
import { EmployeeAttendenceComponent } from './employee-attendence/employee-attendence.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '', component: EmployeeComponent, children:
      [
        { path: 'registration', component: EmployeeRegistrationComponent },
        { path: 'edit/:id', component: EmployeeRegistrationComponent },
        { path: 'search', component: EmployeeSearchComponent },
        { path: 'employeeType', component: EmployeeTypeComponent },
        { path: 'employeeAllocation', component: EmployeeAllocationComponent },
        { path: 'employeeAttendence', component: EmployeeAttendenceComponent },
        { path: 'paymentSummary', component: PaymentSummaryComponent },
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
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

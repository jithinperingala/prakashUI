import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NotifyService } from '../../../core/services/notification/notify.service';

@Component({
  selector: 'app-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss']
})
export class PaymentSummaryComponent implements OnInit {
  employeeData
  constructor(private employeeService: EmployeeService, private notifyservice: NotifyService) {
    this.employeeService.getEmployeeBysearchKey(" ").subscribe(res => {
      this.employeeData = res[0]
    })
  }
  searchdata
  searchKey
  ngOnInit() {

  }
  getaccountSummary() {
    if (this.searchKey) {
      this.employeeService.getPaymentSummary(this.searchKey).subscribe(
        result => {
          console.log(result)
          this.searchdata = result
        }
      )
    }
    else {
      this.notifyservice._ContentMissing()
    }

  }
  DeleteEmployee(){
    
  }
}

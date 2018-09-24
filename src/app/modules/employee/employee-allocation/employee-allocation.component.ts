import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';

@Component({
  selector: 'app-employee-allocation',
  templateUrl: './employee-allocation.component.html',
  styleUrls: ['./employee-allocation.component.scss']
})
export class EmployeeAllocationComponent implements OnInit {
  workSites
  searchdata
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployeeBysearchKey(" ").subscribe(res => {
      this.searchdata = res[0]
      console.log("")

    })
    this.employeeService.getSiteDetails().subscribe(res => {
      console.log("app-emp-reg", res)
      this.workSites = res[0]
    })
  }

}

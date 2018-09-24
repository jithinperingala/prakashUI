import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';

@Component({
  selector: 'app-employee-attendence',
  templateUrl: './employee-attendence.component.html',
  styleUrls: ['./employee-attendence.component.scss']
})
export class EmployeeAttendenceComponent implements OnInit {
  workSites
  searchdata
  today:Date=new Date()
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getSiteDetails().subscribe(res => {
      console.log("app-emp-reg", res)
      this.workSites = res[0]
    })
    this.employeeService.getEmployeeBysearchKey(" ").subscribe(res => {
      this.searchdata = res[0]

    })
  }

}

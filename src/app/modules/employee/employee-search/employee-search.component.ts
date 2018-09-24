import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { ModalDirective } from 'angular-bootstrap-md';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';
import { NotifyService } from '../../../core/services/notification/notify.service';
import{OrderbyPipe} from '../../../shared/pipes/orderby.pipe'

@Component({
  selector: 'app-emp-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent implements OnInit {
  searchKey = ""
  searchdata
  orderBy=new OrderbyPipe()
  employeetype
  empType='1'
  @ViewChild('basicModal') public autoShownModal: ModalDirective;
  constructor(private employeeSer: EmployeeService, private router: Router, private notify: NotifyService,private EmployeeService: EmployeeService) { }

  ngOnInit() {
    this.EmployeeService.getEmployeeType().subscribe(res => {
      console.log("app-emp-reg",res)
      this.employeetype = res[0]
    })
    this.getEmployee(" ")
  }

  employeeToDelete
  getEmployee(eve) {
    console.log("empType",this.empType)
    console.log("after trin", this.searchKey)
    this.employeeSer.getEmployeeByemployeeType(this.searchKey,this.empType).subscribe(res => {
      this.searchdata = this.orderBy.transform(res[0],'first_name')

    })
  }

  DeleteEmployee() {

    this.employeeSer.DeleteEmployee(this.employeeToDelete.employee_id).subscribe(res => {
      console.log(res)
      this.autoShownModal.hide();
      let index = this.searchdata.findIndex(x => x.employee_id == this.employeeToDelete.employee_id);
      this.searchdata.splice(index, 1)
      this.notify._sucessDeleteMessage()
    })
  }

  editEmployee(id) {

    this.router.navigate(['employee/edit/', id])
  }
  sortWithTitle(title){
    this.searchdata = this.orderBy.transform(this.searchdata,title)
  }
}

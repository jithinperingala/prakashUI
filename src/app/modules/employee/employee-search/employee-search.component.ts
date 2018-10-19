import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';
import { NotifyService } from '../../../core/services/notification/notify.service';
import{OrderbyPipe} from '../../../shared/pipes/orderby.pipe'
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap';
 
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
  modalRef: BsModalRef;
  constructor(private employeeSer: EmployeeService, private router: Router, private notify: NotifyService,private EmployeeService: EmployeeService,private modalService: BsModalService) { }

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
      let index = this.searchdata.findIndex(x => x.employee_id == this.employeeToDelete.employee_id);
      this.searchdata.splice(index, 1)
      this.modalService.hide(1)
      this.notify._sucessDeleteMessage()
    })
  }

  editEmployee(id) {
    this.router.navigate(['dashbord/employee/edit/', id])
  }
  sortWithTitle(title){
    this.searchdata = this.orderBy.transform(this.searchdata,title)
  }
}

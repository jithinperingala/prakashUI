import { Component, OnInit, ViewChild } from '@angular/core';

import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { containsElement } from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'app-emptype',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.scss']
})
export class EmployeeTypeComponent implements OnInit {

  employeeTypes;
  editOrDeleteTypeId
  cardForm: FormGroup;

  showPopup = false
  constructor(private EmployeeService: EmployeeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.cardForm = this.fb.group({
      employeeType: ['', Validators.required],
      employeeCode: ['', [Validators.required]],

    });
    this.EmployeeService.getEmployeeType().subscribe(res => {
      this.employeeTypes = res[0]
    })
  }
  deleteEmployee() {
    this.showPopup = true
  }
  popupClosed() {
    this.showPopup = false
  }
  createType() {
    this.cardForm.setValue({ employeeType: '', employeeCode: '' })

    
  }
  editEmployeePopup(type) {
    console.log(type)
    this.editOrDeleteTypeId = type.type_id;
    this.cardForm.setValue({ employeeType: type.employee_type_name, employeeCode: type.type_id })
   


  }
  saveEmployeeType(data) {
   
    this.EmployeeService.createEmployeeType(data).subscribe(res => {

    })
  }
  
  deleteEmployeeType(id) {
    this.EmployeeService.deleteEmployeeType(id).subscribe(res => {

    })
  }
}

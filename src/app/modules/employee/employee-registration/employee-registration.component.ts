import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { NavigateService } from 'src/app/core/services/navigation/navigate.service';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';
import { NotifyService } from 'src/app/core/services/notification/notify.service';


@Component({
  selector: 'app-emp-reg',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {

  cardForm: FormGroup;
  empNameEdit;
  searchId

  constructor(private fb: FormBuilder, private EmployeeService: EmployeeService, private navigate: NavigateService, private ActivatedRoute: ActivatedRoute,private NotifyService:NotifyService) {

    this.cardForm = this.fb.group({
      empName: ['', Validators.required],
      empType: ['', [Validators.required]],
      aadarNumber: ['', Validators.required],
      insuranceNumber: [''],
      address: ['', Validators.required],
      fileupload: [''],
      contactno:['',Validators.required],
      email:[''],
      officialNumber:[''],
      dob:[''],
      gender:[''],
      contactPerson:[''],
      contactPersonMobile:[''],
      contactPesonRelation:[''],
      wagesType:[""],
      salaryAmount:[""]
    });

    this.EmployeeService.getEmployeeType().subscribe(res => {
      console.log("app-emp-reg",res)
      this.employeetype = res[0]
    })
  }
  employeetype
  ngOnInit() {
    this.searchId = this.ActivatedRoute.snapshot.params['id']
    if (this.searchId) {
      this.EmployeeService.getEmployeeBysearchKey(this.searchId).subscribe(res => {
        console.log("employee to edit", res)
        this.cardForm.controls.empName.setValue(res.first_name)
        this.cardForm.controls.empType.setValue(res.employee_type)
        this.cardForm.controls.aadarNumber.setValue(res.identity_card_number)
        this.cardForm.controls.insuranceNumber.setValue(res.insurance_number)
        this.cardForm.controls.address.setValue(res.address)
        this.cardForm.controls.contactno.setValue(res.mobile)

        this.cardForm.controls.email.setValue(res.email)
        this.cardForm.controls.officialNumber.setValue(res.official_number)
        this.cardForm.controls.dob.setValue(new Date(res.date_of_birth).toISOString().substring(0, 10))
        this.cardForm.controls.gender.setValue(res.gender)
        this.cardForm.controls.contactPerson.setValue(res.ref_contact_person)
        this.cardForm.controls.contactPersonMobile.setValue(res.ref_contact_person_mobile)
        this.cardForm.controls.contactPesonRelation.setValue(res.ref_relation)
        this.cardForm.controls.wagesType.setValue(res.salary_type)
        this.cardForm.controls.salaryAmount.setValue(res.salary)
        

      })

    }


  }
  SaveData(data) {
    console.log(data)
    if (this.searchId) {
      data.employee_id = this.searchId
      data.createUpdate = "1"
      this.EmployeeService.createEmployee(data).subscribe(res => {
        this.NotifyService._sucessMessage()
        this.navigate._navigate('')
      })
    }
    else {
      data.createUpdate = "0"
      this.EmployeeService.updateEmployee(data).subscribe(res => {
        this.NotifyService._sucessMessage()
       // this.navigate._navigate('')
       this.cardForm.reset()
      })
    }
  }

}

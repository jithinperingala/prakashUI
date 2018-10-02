import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { NavigateService } from 'src/app/core/services/navigation/navigate.service';
import { EmployeeService } from 'src/app/modules/employee/shared/employee.service';
import { NotifyService } from 'src/app/core/services/notification/notify.service';
import { config } from 'src/app/configs/app-settings.config'

@Component({
  selector: 'app-emp-reg',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {

  cardForm: FormGroup;
  empNameEdit;
  searchId;
  isFormValid
  public uploader: FileUploader = new FileUploader({ url: config._baseURL, itemAlias: 'photo' });

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;
  formErrors = {
    empName: '',
    empType: '',
    contactno: '',
    dob: '',
    gender: '',
    address:'',
    aadarNumber:''

  };

  validationMessages = {
    empName: {
      'required': 'Employee Name is required',
    },
    empType: {
      'required': 'Employee type is required',
    },
    contactno: {
      'required': 'Contact number is required',
      'minlength': 'Contact number should be of 10 digits',

    },
    dob: {
      'required': 'Date of Birth is required'
    },
    gender: {
      'required': 'Gender is required'
    }, 
    address: {
      'required': 'Address is required'
    },
    aadarNumber: {
      'required': 'Aadhaar is required',
    }
  };
  constructor(private fb: FormBuilder, private EmployeeService: EmployeeService, private navigate: NavigateService, private ActivatedRoute: ActivatedRoute, private NotifyService: NotifyService, private el: ElementRef) {
    this.captures = [];
    this.isFormValid = false;
    this.cardForm = this.fb.group({
      empName: ['', [Validators.required]],
      empType: ['', [Validators.required]],
      aadarNumber: ['', Validators.required],
      insuranceNumber: [''],
      address: ['', Validators.required],
      fileupload: [''],
      contactno: ['', [Validators.required,Validators.minLength(10)]],
      email: [''],
      officialNumber: [''],
      dob: ['',Validators.required],
      gender: [''],
      contactPerson: [''],
      contactPersonMobile: [''],
      contactPesonRelation: [''],
      wagesType: [""],
      salaryAmount: ["0"]
    });
    this.cardForm.valueChanges.subscribe((data) => {
        
      for (let field in this.formErrors) {
          this.formErrors[field] = '';
          let input = this.cardForm.get(field);

          if (input.invalid) {
              for (let err in input.errors) {
                  this.formErrors[field] = this.validationMessages[field][err];
              }
          }
      }

      this.isFormValid = this.cardForm.valid;
  });

    this.EmployeeService.getEmployeeType().subscribe(res => {
      console.log("app-emp-reg", res)
      this.employeetype = res[0]
    })
  }
  employeetype
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log("ImageUpload:uploaded:", item, status, response);

    };
    this.searchId = this.ActivatedRoute.snapshot.params['id']
    this.cardForm.controls.empType.setValue(1)
    this.cardForm.controls.gender.setValue(0)
    this.cardForm.controls.wagesType.setValue(0)
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
  public ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      });
    }
  }

  public capture() {
    this.captures = []
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 200, 150);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    console.log(this.captures)
  }
  public clearPhoto() {
    this.captures = []
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    inputEl.value = null
  }

  upload(id, empid) {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#' + id);
    console.log("iam+ " + inputEl);
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    formData.append("empid", empid);
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < fileCount; i++) {
        formData.append('photo', inputEl.files.item(i));
      }
      this.EmployeeService.savePhoto(formData, id)
    }
  }

  uploadImg(empid) {
    if (this.captures.length > 0)
      this.EmployeeService.saveBlob(this.captures[0], empid)
  }
  SaveData(data) {
    console.log(data)
    if (this.searchId) {
      data.employee_id = this.searchId
      data.createUpdate = "1"

      this.EmployeeService.createEmployee(data).subscribe(res => {
        //  this.upload('canvas', data.employee_id);
        this.upload('photo', data.employee_id);
        this.upload('aadar', data.employee_id)
        this.upload('insurance', data.employee_id)
        this.uploadImg(data.employee_id)
        this.NotifyService._sucessMessage()
        this.navigate._navigate('')
      })
    }
    else {
      data.createUpdate = "0"
      this.EmployeeService.updateEmployee(data).subscribe(res => {
        console.log("jijijji", res[0][0]['employeeId'])
        // this.upload('canvas', res[0][0]['employeeId']);
        this.uploadImg(res[0][0]['employeeId'])
        this.upload('photo', res[0][0]['employeeId']);
        this.upload('aadar', res[0][0]['employeeId'])
        this.upload('insurance', res[0][0]['employeeId'])
        this.NotifyService._sucessMessage()
        // this.navigate._navigate('')
        this.cardForm.reset()
      })
    }
  }
}

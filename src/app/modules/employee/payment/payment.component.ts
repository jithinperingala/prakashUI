import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';
import { UserService } from '../../../shared/services/user.service';
import{ActivatedRoute} from '@angular/router'
import { NotifyService } from 'src/app/core/services/notification/notify.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  workSites =[]
  employeeData
  bulkPaymentMode
  formHeadder
  siteDetails
  bankNames
  constructor(private fb: FormBuilder, private employeeService: EmployeeService,private userservice:UserService,private activeroute:ActivatedRoute,private NotifyService:NotifyService) {

  this.activeroute.data.subscribe(
    res=>{
      console.log(res['formData']['bulkPaymentMode'])
      this.bulkPaymentMode=res['formData']['bulkPaymentMode']
      this.bulkPaymentMode==false?this.formHeadder="Cash Transfer":this.formHeadder="Payment"
    }
  )
   }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      workSite: ['', [Validators.required]],
      amount: ['', Validators.required],
      paymentDate: [new Date().toISOString().split('T')[0], Validators.required],
      remark:[''],
      bankName:['']
    });
    this.employeeService.getSiteDetails().subscribe(res => {
      console.log("app-emp-reg", res)
      this.workSites = res[0]
    })
    this.employeeService.getBankDetails( " ").subscribe(res => {
      console.log("app-emp-reg", res)
      this.bankNames = res[0]
    })
    this.employeeService.getEmployeeBysearchKey(" ").subscribe(res => {
      this.employeeData = res[0]
      console.log(this.userservice.loggeduser)
      this.paymentForm.controls['fromAccount'].setValue(this.userservice.loggeduser)
    })
    
  }

  SavePayment(paymentObject) {
    console.log(paymentObject)
    paymentObject.isclosed=this.bulkPaymentMode
    this.employeeService.payment(paymentObject).subscribe(
      result => {
        console.log(result)
        this.NotifyService._sucessMessage()
        this.paymentForm.reset()
      }
    )
  }
  

    
}

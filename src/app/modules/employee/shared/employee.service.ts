import { Injectable } from '@angular/core';
import { AjaxService } from 'src/app/core/services/ajax/ajax.service';
import { Pathgenerator } from 'src/app/core/services/ajax/pathgenerator';
import { tap, map } from 'rxjs/operators';
import { Observable, observable, of } from 'rxjs';
import { containsElement } from '@angular/animations/browser/src/render/shared';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeDetails: Array<object>
  employeeType: Array<object>
  constructor(private http: AjaxService, private pathgen: Pathgenerator) {
  }
  createEmployee(empObject) {
    return this.http._post(this.pathgen.createUpdateEmployee(), empObject)
  }
  updateEmployee(empObject) {
    return this.http._post(this.pathgen.createUpdateEmployee(), empObject)
  }

  getEmployeeBysearchKey(key) {
    console.log("Service key", key)
    if (!key) { key = " " }
    else { key = key.trim() }
    return this.http._get(this.pathgen.getEmployeeDetails() + "?key=" + key).pipe(
      tap(res => {
        //  this.employeeDetails = res[0]
        console.log("this.employeeDetails", this.employeeDetails)
      })
    )
      .pipe(map(res => res[0][0]))
  }

  getEmployeeByemployeeType(key, emptype) {
    console.log("Service key", key)
    if (!key) { key = " " }
    else { key = key.trim() }
    return this.http._get(this.pathgen.getAllEmployeebyId() + "?key=" + key + "&emptype=" + emptype).pipe(
      tap(res => {
        this.employeeDetails = res[0]
        console.log("this.employeeDetails", this.employeeDetails)
      })
    )
  }
  DeleteEmployee(employeeID) {
    return this.http._get(this.pathgen.deleteEmployee() + "?key=" + employeeID)
  }


  //////employee type

  getEmployeeType(): Observable<any> {
    if (this.employeeType) return of(this.employeeType)
    return this.http._get(this.pathgen.getEmployeeType()).pipe(
      tap(res => this.employeeType = res)
    )
  }

  createEmployeeType(data) {
    return this.http._post(this.pathgen.deleteEmployee(), data)
  }
  deleteEmployeeType(id) {
    return this.http._post(this.pathgen.deleteEmployee(), id)
  }

  payment(paymentObject) {
    return this.http._post(this.pathgen.employeePayment, paymentObject)
  }

  getSiteDetails() {
    return this.http._get(this.pathgen.getSiteDetails)
  }

  getPaymentSummary(id) {
    return this.http._get(this.pathgen.employeePaymentReport + "?key=" + id)
      .pipe(map(res => this.formatPaymentSummary(res[0], id)))
  }
  formatPaymentSummary(dta, id) {

    return dta.map(res => this.convertData(res, id))

  }
  convertData(dta, id) {
    let paymentReportObj = new paymentReport()
    console.log(dta)
    if (dta.givenByID == id)
      paymentReportObj.creditAmount = dta.GivenAmount
    else
      paymentReportObj.debitAmount = dta.GivenAmount

    paymentReportObj.from = dta.GivenByName
    paymentReportObj.to = dta.GivenToName
    paymentReportObj.date = dta.TransactionDate
    return paymentReportObj
  }
  getBankDetails(id) {
    if (this.employeeDetails)
      return of(this.employeeDetails.find(res => res['employee_id'] == id))
    else
      return of()
  }
  saveBlob(blob, id) {
    this.http._post(this.pathgen.uploadEmployeeImageBlob(), { formData: blob, empid: id }).subscribe(
      (success) => {
        console.log(success._body);
      },
      (error) => console.log(error)
    );
  }
  savePhoto(formData, id) {
    console.log(formData)
    let path

    if (id == 'photo') {
      path = this.pathgen.uploadEmployeeImage()
    }
    else if (id == 'canvas') {
      path = this.pathgen.uploadEmployeeImage()
    }
    else if (id == 'aadar') {
      path = this.pathgen.uploadEmployeeAadar()
    }
    else if (id == 'insurance') {
      path = this.pathgen.uploadEmployeeInsurance()
    }
    this.http._post(path, formData).subscribe(
      (success) => {
        console.log(success._body);
      },
      (error) => console.log(error)
    );
  }
  saveAttendence(employee,date) {

  }
}

class paymentReport {
  from: string
  to: string
  creditAmount: number
  debitAmount: number
  date: Date
}
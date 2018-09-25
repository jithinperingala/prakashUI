import { config } from 'src/app/configs/app-settings.config'
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class Pathgenerator {
    uriCollection =
        {
            createUpdateEmployee: 'employee/createUpdateEmployee',
            getEmployeeDetails: 'employee/getEmployeeDetails',
            DeleteEmployee: 'employee/deleteEmployee',
            searchByEmpType:'employee/getEmployeeDetails/empType',
            uploadEmployeeImage:'employee/createUpdateEmployee/photoUpload',
            uploadAadar:'employee/createUpdateEmployee/aadarUpload',
            uploadInsurance:'employee/createUpdateEmployee/insuranceUpload',

            getEmployeeType: 'employee/getEmployeeType',
            createUpdateEmployeeType:'employee/createUpdateEmployeeType',
            DeleteEmployeeType: 'employee/deleteEmployeeType',

            validateUser:"validateUser/login",

            getSiteDetails:"site/getSiteDetails",

            EmployeePayment:"employee/payment",
            EmployeePaymentReport:"employee/paymentReport"
        }

    private generatePath(uri): string {
        return config._baseURL + uri
    }
    uploadEmployeeImage(){
        return this.generatePath(this.uriCollection.uploadEmployeeImage)
    }
    uploadEmployeeInsurance(){
        return this.generatePath(this.uriCollection.uploadInsurance)
    }
    uploadEmployeeAadar(){
        return this.generatePath(this.uriCollection.uploadAadar)
    }
    createUpdateEmployee() {
        return this.generatePath(this.uriCollection.createUpdateEmployee)
    }
    getEmployeeDetails() {
        return this.generatePath(this.uriCollection.getEmployeeDetails)
    }
    getAllEmployeebyId() {
        return this.generatePath(this.uriCollection.searchByEmpType)
    }
    deleteEmployee() {
        return this.generatePath(this.uriCollection.DeleteEmployee)
    }

    getEmployeeType(): string {
        return this.generatePath(this.uriCollection.getEmployeeType)
    }
    createUpdateEmployeeTYpe() {
        return this.generatePath(this.uriCollection.createUpdateEmployeeType)
    }
    deleteEmployeeType() {
        return this.generatePath(this.uriCollection.DeleteEmployeeType)
    }
    get validateuser(){
        return this.generatePath(this.uriCollection.validateUser)
    }
    get employeePayment(){
        return this.generatePath(this.uriCollection.EmployeePayment)
 
    }
    get getSiteDetails(){
        return this.generatePath(this.uriCollection.getSiteDetails)
    }
    get employeePaymentReport(){
        return this.generatePath(this.uriCollection.EmployeePaymentReport)
    }
}

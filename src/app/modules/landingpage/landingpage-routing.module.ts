import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage.component';

const routes: Routes = [
  {
    path:'',component:LandingpageComponent,children:
    [
      {
        path:'employee',loadChildren:'src/app/modules/employee/employee.module#EmployeeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingpageRoutingModule { }

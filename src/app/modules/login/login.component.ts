import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { LoginService } from './shared/login.service';
import { NotifyService } from '../../core/services/notification/notify.service';
import{Router}from'@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
     private loginService: LoginService, 
     private notifyservice: NotifyService,
     private router:Router) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      passCode: ['', [Validators.required]],

    });
  }

  validateUser(loginData) {
    this.loginService.validateUser(loginData).subscribe(
      result => {
        if (result) {
          this.router.navigate(['dashbord'])
        } else {
          this.notifyservice._loginFailed()
        }
      },
      err=>{
        this.notifyservice._loginFailed()
      }
    )
  }
}

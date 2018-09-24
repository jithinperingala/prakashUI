import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from './shared/login.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { NotifyService } from '../../core/services/notification/notify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('logInModal') public autoShownModal: ModalDirective;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private notifyservice: NotifyService) { }
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
          this.autoShownModal.hide()
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

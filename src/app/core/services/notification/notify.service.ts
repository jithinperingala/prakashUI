import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Environment } from '../ajax/environment';

@Injectable({providedIn:'root'})
export class NotifyService {
  //reffer https://www.npmjs.com/package/angular2-notifications
  //https://jaspero.co/resources/projects/ng-notifications
 // https://www.npmjs.com/package/angular-notifier
  constructor(private _service: NotifierService ) { }
  private success(obj: NotifyMessage) {
    this._service.notify(
      obj.title,
      obj.content
    )
  }
  private error(obj: NotifyMessage) {
    this._service.notify(
      obj.title,
      obj.content
    )
  }
  private warn(obj: NotifyMessage) {
    this._service.notify(
      obj.title,
      obj.content
    )
  }
  private info(obj: NotifyMessage) {
    this._service.notify(
      obj.title,
      obj.content
    )
  }
  _ajaxinternetConectivity() {
    if (!Environment._internetConnection()) {
      this.warn({ title: "Connectivity Issue", content: "Please check Internet connection" })
      return false
    }
  }
  _loginInfo(){
    this.info({title:'info',content:"Please login"})
  }
  _loginFailed(){
    this.info({title:'info',content:"Incorrect information"})
  }
  _sucessMessage(){
    this.success({title:'success',content:"Saved Successfully"})
  }
  _sucessDeleteMessage(){
    this.success({title:'success',content:"Delete Successfully"})
  }
  _ContentMissing(){
    this.warn({title:'warning',content:"Select an employeee"})
  }
}

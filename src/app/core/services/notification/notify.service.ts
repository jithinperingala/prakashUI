import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Environment } from '../ajax/environment';

@Injectable({providedIn:'root'})
export class NotifyService {
  //reffer https://www.npmjs.com/package/angular2-notifications
  //https://jaspero.co/resources/projects/ng-notifications
  constructor(private _service: NotificationsService) { }
  private success(obj: NotifyMessage) {
    this._service.success(
      obj.title,
      obj.content
    )
  }
  private error(obj: NotifyMessage) {
    this._service.error(
      obj.title,
      obj.content
    )
  }
  private warn(obj: NotifyMessage) {
    this._service.warn(
      obj.title,
      obj.content
    )
  }
  private info(obj: NotifyMessage) {
    this._service.info(
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
    this.info({title:'Login Required',content:"Please login"})
  }
  _loginFailed(){
    this.info({title:'Login Failed',content:"Incorrect information"})
  }
  _sucessMessage(){
    this.success({title:'Success',content:"Saved Successfully"})
  }
  _sucessDeleteMessage(){
    this.success({title:'Success',content:"Delete Successfully"})
  }
  _ContentMissing(){
    this.warn({title:'Warning',content:"Select an employeee"})
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedUserID
  constructor() { }
  set loggeduser(userid) {
    this.loggedUserID = userid
  }
  get loggeduser() {
    return this.loggedUserID
  }
}

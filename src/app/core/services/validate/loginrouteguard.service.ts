import { Injectable } from '@angular/core';
import { SessionService } from '../session/session';
import { NotifyService } from '../notification/notify.service';

@Injectable({providedIn:'root'})
export class LoginRouteGuard {

  constructor(private session: SessionService, private notifyService: NotifyService) { }

  canActivate() {
    if (this.session.sessionID) {
      console.log("active true")
      return true
    }
    else {
      console.log("active false")
      this.notifyService._loginInfo();
      return false
    }
  }
}

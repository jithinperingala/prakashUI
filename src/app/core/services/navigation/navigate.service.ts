import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { SessionService } from '../session/session';

@Injectable({
  providedIn:'root'
})
export class NavigateService {

  constructor(private router: Router, private session: SessionService) { }

  _navigate(path: string)
  _navigate(path, login: boolean)
  _navigate(path: string, login: boolean = false, id?: string) {

    // console.log(path + "--" + login + "--" + id)
    this.session.actualPath = path
    if (!this.session.sessionID && login == true) {
      this.router.navigate(['login'])
    }
    else {
      id != undefined ? this.router.navigate([path, id]) : this.router.navigate([path])
    }

  }

}

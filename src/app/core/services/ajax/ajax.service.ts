import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NotifyService } from '../notification/notify.service';
import { Environment } from '../ajax/environment';
import { HttpClient, HttpResponse } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private http: HttpClient, private notifyService: NotifyService) { }

  _get(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(catchError(error => {

        if (error.status == 0) {
          this.notifyService._ajaxinternetConectivity();
        }

        return Observable.throw(error.status);
      }))


  }
  _post(url: string, obj: object): Observable<any> {
    return this.http.post(url, obj)
      .pipe(catchError(error => {

        if (error.status == 0) {
          this.notifyService._ajaxinternetConectivity();
        }

        return Observable.throw(error.status);
      }))
  }

}

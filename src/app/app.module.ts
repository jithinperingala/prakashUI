import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NotificationComponent } from 'src/app/core/services/notification/notification.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './modules/login/login.component';
import { NotificationModule } from './core/services/notification/notification.module';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    NotificationModule,HttpClientModule, AppRoutingModule,ModalModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

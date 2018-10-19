import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponent } from './landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ],
  declarations: [LandingpageComponent   , NavbarComponent,
    FooterComponent,]
})
export class LandingpageModule { }

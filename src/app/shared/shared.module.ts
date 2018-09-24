import { NgModule } from '@angular/core';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OrderbyPipe } from './pipes/orderby.pipe';

@NgModule({
  imports: [
   MDBBootstrapModule.forRoot()
  ],
  exports:[DeletePopupComponent,OrderbyPipe],
  declarations: [DeletePopupComponent, OrderbyPipe]
})
export class SharedModule { }

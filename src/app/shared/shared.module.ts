import { NgModule } from '@angular/core';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { OrderbyPipe } from './pipes/orderby.pipe';

@NgModule({
  imports: [
  ],
  exports:[DeletePopupComponent,OrderbyPipe],
  declarations: [DeletePopupComponent, OrderbyPipe]
})
export class SharedModule { }

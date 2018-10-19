import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { MeterialPurchaseComponent } from './meterial-purchase/meterial-purchase.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';

@NgModule({
  imports: [
    CommonModule,
    AccountsRoutingModule
  ],
  declarations: [MeterialPurchaseComponent, ItemDetailsComponent, UnitDetailsComponent]
})
export class AccountsModule { }

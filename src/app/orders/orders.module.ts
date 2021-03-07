import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { LineItemComponent } from './line-item/line-item.component';


@NgModule({
  declarations: [OrdersPageComponent, LineItemComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  exports: [OrdersPageComponent]
})
export class OrdersModule { }

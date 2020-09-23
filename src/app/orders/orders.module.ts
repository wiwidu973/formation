import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageOrderComponent } from './pages/page-order/page-order.component';

@NgModule({
  declarations: [PageOrderComponent],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}

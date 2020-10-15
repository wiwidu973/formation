import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';
import { FormOrderComponent } from './Components/form-order/form-order.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order/page-add-order.component';
import { PageOrderComponent } from './pages/page-order/page-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageRecapOrderComponent } from './pages/page-recap-order/page-recap-order.component';

@NgModule({
  declarations: [PageOrderComponent, FormOrderComponent, PageAddOrderComponent, PageEditOrderComponent, PageRecapOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    TemplatesModule,
    ReactiveFormsModule,
    IconsModule,
  ],
})
export class OrdersModule {}

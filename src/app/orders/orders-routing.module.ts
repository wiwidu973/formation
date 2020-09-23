import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOrderComponent } from './pages/page-order/page-order.component';

const routes: Routes = [
  {
    path: '',
    component: PageOrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}

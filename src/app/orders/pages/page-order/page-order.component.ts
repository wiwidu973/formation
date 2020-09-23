import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-order',
  templateUrl: './page-order.component.html',
  styleUrls: ['./page-order.component.scss'],
})
export class PageOrderComponent implements OnInit {
  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.orderService.collection.subscribe((datas) => {
      console.log(datas);
    });
  }
}

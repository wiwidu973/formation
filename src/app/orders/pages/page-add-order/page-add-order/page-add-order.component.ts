import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/orders/services/orders.service';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  constructor(
    private orderService: OrdersService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  public addOrder(order: Order) {
    this.orderService.addOrder(order).subscribe((response) => {
      // this.router.navigate(['orders']);
      this.router.navigate(['../'], { relativeTo: this.currentRoute });
    });
  }
}

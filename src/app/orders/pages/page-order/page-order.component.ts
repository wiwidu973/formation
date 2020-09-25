import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/Order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-order',
  templateUrl: './page-order.component.html',
  styleUrls: ['./page-order.component.scss'],
})
export class PageOrderComponent implements OnInit, OnDestroy {
  private subscribtion: any;
  public headers: string[];
  public collectionOrders$: Observable<Order[]>;
  public states = Object.values(StateOrder);

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this.collectionOrders$ = this.ordersService.collection;

    this.headers = [
      'Client',
      'Type de Prestation',
      'commentaire',
      'Nombre de Jours',
      'Total HT',
      'Total TTC',
      'Etat',
      'Actions',
    ];
  }
  public changeState(item: Order, event) {
    this.ordersService
      .changeState(item, event.target.value)
      .subscribe((result) => {
        item.state = result.state;
      });
  }
  ngOnDestroy(): void {}

  public testButton() {
    alert('click sur le bouton');
  }
  public testButton2() {
    alert('click sur le bouton');
  }
  public edit(item: Order) {
    this.router.navigate(['orders', 'edit', item.id]);
  }
}

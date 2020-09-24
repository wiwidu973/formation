import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/Order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-order',
  templateUrl: './page-order.component.html',
  styleUrls: ['./page-order.component.scss'],
})
export class PageOrderComponent implements OnInit {
  private subscribtion: any;
  public headersOrder: string[];
  public collectionOrder: Order[];
  public states = Object.values(StateOrder);
  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.subscribtion = this.orderService.collection.subscribe((datas) => {
      datas.forEach((order) => {
        this.collectionOrder = datas;
      });
    });
    this.headersOrder = [
      'Client',
      'Type de Prestation',
      'commentaire',
      'Nombre de Jours',
      'Total HT',
      'Total TTC',
      'Etat',
    ];
  }
  public changeState(item: Order, event) {
    this.orderService
      .changeState(item, event.target.value)
      .subscribe((result) => {
        item.state = result.state;
      });
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  public testButton() {
    alert('click sur le bouton');
  }
  public testButton2() {
    alert('click sur le bouton');
  }
}

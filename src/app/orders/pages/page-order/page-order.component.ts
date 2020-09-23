import { Component, OnInit } from '@angular/core';
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
      'Etat',
      'Nombre de Jours',
    ];
  }
}

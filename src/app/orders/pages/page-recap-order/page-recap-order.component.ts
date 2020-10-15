import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Client } from 'src/app/shared/models/client';
import { Order } from 'src/app/shared/models/Order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-recap-order',
  templateUrl: './page-recap-order.component.html',
  styleUrls: ['./page-recap-order.component.scss']
})
export class PageRecapOrderComponent implements OnInit {
  private subscribtion: any;
  public headers: string[];
  public collectionOrders$: Observable<Order[]> = new Subject();
  public states = Object.values(StateOrder);


  constructor(
    private ordersService: OrdersService,
    private clientService: ClientsService,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
this.collectionOrders$ = this.currentRoute.paramMap.pipe(
//   switchMap(
//     (params: ParamMap) => {
//       return this.clientService.getById(params.get("id")).pipe(
//         switchMap(
//           (client) =>{
//    return this.ordersService.getOrderByClientName(client.name);
//  })
//       )
//     }
//   )

  mergeMap(
    (params: ParamMap) => {
      return this.clientService.getById(params.get("id")).pipe(
        mergeMap(
          (client) =>{
   return this.ordersService.getOrderByClientName(client.name);
 })
      )
    }
  )
)
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

}

import { Component, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/orders/services/orders.service';
import { Order } from 'src/app/shared/models/Order';
import { Observable } from 'rxjs';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {

  public order$: Observable<Order>;
  public modalValues: Order;
  @ViewChild('addOrderModal') addOrderModalRef: TemplateRef<any>;
  private currentActiveModal: NgbModalRef;

  constructor(
    private orderService: OrdersService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {}
  public openaddModal(values: any){
    this.modalValues = values;
    this.currentActiveModal = this.modalService.open(this.addOrderModalRef);

  }
  public dismissModal(){
    console.log(this.currentActiveModal)
    this.currentActiveModal.dismiss();
  }

  public addOrder(order: Order) {
    this.orderService.addOrder(order).subscribe(
      (response) => {
      // this.router.navigate(['orders']);
      this.dismissModal();
      this.router.navigate(['../'], { relativeTo: this.currentRoute });

    });
  }

}

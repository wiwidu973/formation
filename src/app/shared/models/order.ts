import { StateOrder } from '../enums/state-order.enum';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
  totalHt(): number {
    return this.tjmHt * this.nbJours;
  }
  totalTtc(): number {
    return this.totalHt() * (1 + this.tva / 100);
  }
  tjmHt: number = 300;
  nbJours: number = 1;
  tva: number = 20;
  state: StateOrder = StateOrder.CONFIRMED;
  typePresta: string;
  client: string;
  comment: string;
  id: number;
}

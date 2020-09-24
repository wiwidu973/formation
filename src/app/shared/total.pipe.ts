import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './models/Order';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(value: Order, ...args: any[]): number {
    if (value) {
      if (args.length > 0 && args) {
        return value.totalTtc();
      } else {
        return value.totalHt();
      }
    }
    return null;
  }
}

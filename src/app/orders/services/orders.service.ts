import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Client } from 'src/app/shared/models/client';
import { Order } from 'src/app/shared/models/Order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map((col) => {
        return col.map((order) => {
          return new Order(order);
        });
      })
    );
  }
  get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  set collection(col: Observable<Order[]>) {
    this.pCollection = col;
  }
  public changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order({ ...item });
    obj.state = state;
    return this.updateOrder(obj);
  }
  public updateOrder(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}orders/${item.id}`, item);
  }

  public addOrder(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}orders`, item);
  }
  public getById(id: string) {
    return this.http.get<Order>(`${this.urlApi}orders/${id}`);
  }
  public deleteOrder(item: Order): Observable<Order> {
    return this.http.delete<Order>(`${this.urlApi}orders/${item.id}`);
  }

  public getOrderByClientName(name: string) : Observable<Order[]>{
    return this.http.get<Order[]>(`${this.urlApi}orders?client=${name}`).pipe(
      map((col) => {
        return col.map((item) => {
          return new Order(item);
        })

    })

      )
}

public getOrder2ByClientName(name: string) : Observable<Order[]>{
  return this.http.get<Order[]>(`${this.urlApi}orders2?client=${name}`).pipe(
    map((col) => {
      return col.map((item) => {
        return new Order(item);
      })

  })

    )
}

getAllOrderByClientName(name:string) : Observable<Order[]>{
  return forkJoin([this.getOrder2ByClientName(name), this.getOrderByClientName(name)]).pipe(
    map(
      (cols)=>{
        return cols[0].concat(cols[1]);
      })
  )

}
}

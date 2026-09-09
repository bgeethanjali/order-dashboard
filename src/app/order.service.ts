import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Order {
  orderId: number;
  customerName: string;
  total: number;
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private apiUrl = 'https://api.example.com/orders';

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http
      .get<Order[]>(this.apiUrl)
      .pipe(map(orders => orders.filter(o => o.total > 0)));
  }
}

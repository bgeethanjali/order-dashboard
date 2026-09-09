import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from './order.service';

@Component({
  selector: 'app-orders',
  template: `
    <h2>Orders</h2>
    <ul>
      <li *ngFor="let order of orders">
        #{{ order.orderId }} — {{ order.customerName }} ({{ order.total | currency }})
      </li>
    </ul>
  `
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => (this.orders = data));
  }
}

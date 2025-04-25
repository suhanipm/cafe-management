import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'] // assuming SCSS
})
export class OrdersComponent {
  newOrder = {
    customer: '',
    items: '',
    notes: ''
  };

  orders: any[] = [];

  placeOrder() {
    const order = {
      ...this.newOrder,
      time: new Date().toLocaleTimeString(),
      status: 'Pending'
    };
    this.orders.push(order);
    this.newOrder = { customer: '', items: '', notes: '' };
  }

  markComplete(order: any) {
    order.status = 'Completed';
  }

  deleteOrder(index: number) {
    this.orders.splice(index, 1);
  }
}

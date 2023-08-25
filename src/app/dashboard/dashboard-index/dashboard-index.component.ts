import { Component, Input, Output, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'll-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss']
})
export class DashboardIndexComponent implements OnInit {
  orders = [];

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.orders = this.dataService.showCart();

    console.log(this.orders);
  }

  deleteItem(id: any) {
    console.log(this.dataService.deleteItem(id));
    this.ngOnInit();
  }
  updateQuantity(id: any, order: any, newQuantity: number) {
    order.quantity = newQuantity;
    order.totalPrice = order.price * order.quantity;
    // console.log(order);

    console.log(this.dataService.updateQuantity(order.id, newQuantity));
  }

  clearCart() {
    this.dataService.clearCart();
    this.ngOnInit();
  }

  calculateTotal(): number {
    let total = 0;

    if (this.orders != null) {
      for (const order of this.orders) {
        total += order.totalPrice;
      }
      return total;
    }

    return 0;
  }
}

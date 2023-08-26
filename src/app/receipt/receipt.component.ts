import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent implements OnInit {
  user: any[] = [];
  cart: any[] = [];

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    // console.log(this.dataService.getCheckoutDetails());

    this.user = this.dataService.getCheckoutDetails().User;
    this.cart = this.dataService.getCheckoutDetails().Cart;

    console.log('User information: ', this.user);
    console.log('Cart information: ', this.cart);

    window.print();
  }
}

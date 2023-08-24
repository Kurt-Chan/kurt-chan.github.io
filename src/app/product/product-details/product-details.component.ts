import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  cart: any;
  quantity: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataServiceService) {}

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    this.product = this.dataService.getProductById(id);
    console.log('Retrieved Product:', this.product);

    console.log(this.dataService.showCart());
  }

  addToCart() {
    this.product.quantity = this.quantity;
    this.dataService.addToCart(this.product);
    window.alert('Item added to cart!');
  }
}

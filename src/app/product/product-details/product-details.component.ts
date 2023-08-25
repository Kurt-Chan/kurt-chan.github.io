import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  cart: any;
  quantity: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataServiceService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    this.product = this.dataService.getProductById(id);
    console.log('Retrieved Product:', this.product);
  }

  addToCart() {
    this.product.quantity = this.quantity;
    this.product.totalPrice = this.product.price * this.quantity;

    this.dataService.addToCart(this.product);
    this.openSnackBar('Item added to cart!', 'Show Cart');
  }

  openSnackBar(message: string, action: string) {
    let snackBarRef = this.snackBar.open(message, action, {
      duration: 2000
    });

    // Redirect to the cart page
    snackBarRef.onAction().subscribe(() => {
      console.log('Snack bar action triggered!');
      this.router.navigate(['/dashboard']);
    });

    console.log('Cart: ', this.dataService.showCart());
  }
}

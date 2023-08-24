import { Injectable } from '@angular/core';
import { productsDB } from '../shared/data/products';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  products: any;
  cart: any[] = [];

  constructor() {}

  getAllProducts() {
    return (this.products = productsDB.FakeProducts);
  }

  getProductById(id: any) {
    this.products = productsDB.FakeProducts.find(product => product.id === id);
    return this.products;
  }

  addToCart(product: any) {
    this.cart.push(product);
    let itemCart = JSON.stringify(this.cart);
    localStorage.setItem('Cart', itemCart);
    return itemCart;
  }

  showCart() {
    let itemCart = localStorage.getItem('Cart');
    return JSON.parse(itemCart);
  }
}

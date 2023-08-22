import { Injectable } from '@angular/core';
import { productsDB } from '../shared/data/products';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  products: any;

  constructor() {}

  getAllProducts() {
    return (this.products = productsDB.FakeProducts);
  }

  getProductById(id: any) {
    this.products = productsDB.FakeProducts.find(product => product.id === id);
    return this.products;
  }
}

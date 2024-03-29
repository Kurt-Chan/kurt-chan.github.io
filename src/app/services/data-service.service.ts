import { Injectable } from '@angular/core';
import { productsDB } from '../shared/data/products';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  products: any;
  cart: any[] = [];

  constructor() {
    const cartData = JSON.parse(localStorage.getItem('Cart'));
    if (cartData) {
      this.cart = cartData;
    }
  }

  getAllProducts() {
    return (this.products = productsDB.FakeProducts);
  }

  getProductById(id: any) {
    this.products = productsDB.FakeProducts.find(product => product.id === id);
    return this.products;
  }

  searchProduct(name: any) {
    this.products = productsDB.FakeProducts.filter(product => product.title.toLowerCase().includes(name));
    return this.products;
  }

  searchByCategory(category: any) {
    this.products = productsDB.FakeProducts.filter(product => product.category.includes(category));
    return this.products;
  }

  addToCart(product: any) {
    this.cart.push(product);
    let itemCart = JSON.stringify(this.cart);
    localStorage.setItem('Cart', itemCart);
    return itemCart;
  }

  deleteItem(id: any) {
    this.cart = this.cart.filter(item => item.id !== id);
    let itemCart = JSON.stringify(this.cart);
    localStorage.setItem('Cart', itemCart);

    return JSON.parse(itemCart);
  }

  showCart() {
    let itemCart = localStorage.getItem('Cart');
    return JSON.parse(itemCart);
  }

  updateQuantity(id: any, quantity: number) {
    let itemCart = JSON.parse(localStorage.getItem('Cart'));
    let itemProd = itemCart.find(item => item.id === id);

    if (itemProd) {
      itemProd.quantity = quantity;
      itemProd.totalPrice = itemProd.price * quantity;

      // Update the item within the array
      const index = itemCart.indexOf(itemProd);
      if (index !== -1) {
        itemCart[index] = itemProd;

        // Save the updated cart array back to local storage
        localStorage.setItem('Cart', JSON.stringify(itemCart));

        return itemProd;
      }
    }
  }

  clearCart() {
    localStorage.removeItem('Cart');
    this.cart = [];
  }

  saveCheckoutDetails(value: any) {
    localStorage.setItem('Checkout Details', JSON.stringify(value));
  }

  getCheckoutDetails() {
    let details = JSON.parse(localStorage.getItem('Checkout Details'));
    let cart = JSON.parse(localStorage.getItem('Cart'));

    return {
      User: [details],
      Cart: cart
    };
  }

  login() {
    localStorage.setItem('AuthUser', '1');
    // localStorage.setItem('Email', email);
    console.log('User logged in');
  }

  logout() {
    localStorage.clear();
    console.log('User logged out');
  }
}

import {Injectable} from '@angular/core';
import {Cart} from '../models/cart';
import {OrderItem} from '../models/order-item';

@Injectable({
  providedIn: 'root',
})
export class CartManager {
  // we nee a cart that contains list of Products
  // and this is act as the current Active Cart for the use
  activeCart: Cart;
  // this is a array of carts;
  cartList: Cart[];
  // limit for ongoing orders
  // orders list is limited by this length
  cartLimit = 2;

  constructor() {
    this.addNewCart();
  }

  addNewCart() {
    this.activeCart = new Cart();
  }

  placeOrder() {
    if (this.cartList.length < this.cartLimit) {
      this.cartList.push(this.activeCart);
      this.addNewCart();
    }
  }

  clearCart(): void {
    this.activeCart.clear();
  }

  addItemToCart(item: OrderItem): void {
    this.activeCart.orderItems.push(item);
  }


}

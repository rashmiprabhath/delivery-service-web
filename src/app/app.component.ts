import {Component} from '@angular/core';
import {User} from './models/user';
import {Cart} from './models/cart';
import {OrderItem} from './models/order-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-dilivery-web';
  // current User
  user: User;
  // we nee a cart that contains list of Products
  // and this is act as the current Active Cart for the use
  cart: Cart;
  // this is a array of carts;
  orders: Cart[];
  // limit for ongoing orders
  // orders list is limited by this length
  ordersLimit = 2;

  clearCart(): void {
    this.cart.clear();
  }

  addCart(item: OrderItem): void {
    this.cart.orderItems.push(item);
  }
}

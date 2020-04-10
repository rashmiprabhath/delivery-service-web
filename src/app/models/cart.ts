import {OrderItem} from './order-item';
import {User} from './user';

export class Cart {
  user: User;
  orderItems: OrderItem[] = [];
  grossTotal: number;
  discount = 0;
  serviceCharge = 0;
  netTotal; // price After all calculations

  deliveryDate: Date;

  constructor() {
    this.user = new User();
  }


  updatePrices() {
    let gross = 0;
    for (const item of this.orderItems) {
      gross += item.product.price * item.quantity;
    }
    this.grossTotal = gross;
    this.netTotal = gross - (gross * this.discount) + this.serviceCharge;
  }

  clear() {
    this.orderItems = [];
    this.grossTotal = 0;
    this.netTotal = 0;
  }
}

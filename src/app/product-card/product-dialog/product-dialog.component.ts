import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../models/product';
import {OrderItem} from '../../models/order-item';
import {CartManager} from '../../util/cart-manager';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  quantity: number;
  quantities: number[];
  subTotoal: number;

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartManager: CartManager
  ) {
  }

  ngOnInit() {
    this.quantity = 0;
    this.subTotoal = 0;
    this.initQuantities();
  }

  initQuantities() {
    this.quantities = [];
    for (let i = 1; i <= 10; i++) {
      this.quantities.push(i);
    }
  }

  save() {
    if (this.quantity && this.quantity !== 0) {
      const product: Product = new Product();
      product.id = this.data.id;
      product.name = this.data.name;
      product.price = this.data.price;

      const orderItem: OrderItem = new OrderItem();
      orderItem.product = product;
      orderItem.quantity = this.quantity;

      this.cartManager.addItemToCart(orderItem);

      this.dialogRef.close(orderItem);
    }
  }

  close() {
    this.dialogRef.close('product-dialog closed.');
  }

  onSelector(selection) {
    this.quantity = selection.value;
    this.subTotoal = this.quantity * this.data.price;
  }

}

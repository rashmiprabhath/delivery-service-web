import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ProductDialogComponent} from './product-dialog/product-dialog.component';
import {CartManager} from '../util/cart-manager';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() name: string;
  @Input() id: any;
  @Input() price: number;
  @Input() productType: any;

  constructor(
    private dialog: MatDialog,
    private cartManager: CartManager
  ) {
  }

  ngOnInit(): void {
  }

  addToCart() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      name: this.name,
      id: this.id,
      price: this.price
    };
    const dialogRef = this.dialog.open(ProductDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        console.log(this.cartManager.activeCart);
      }
    );
  }

}

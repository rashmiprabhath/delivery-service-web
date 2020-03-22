import {Component, OnInit} from '@angular/core';
import {DeliveryBackendService} from '../delivery-backend.service';
import {Product} from '../models/product';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ProductDialogComponent} from './product-dialog/product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name: string;
  productList: Product[];

  constructor(private deliveryBackendService: DeliveryBackendService,
              private dialog: MatDialog ) {
  }

  ngOnInit() {
    this.initName();
    this.getAllProducts();
  }

  initName(): void {
    this.deliveryBackendService.getName().subscribe(test => this.name = test[0].name);
  }

  getAllProducts(): void {
    this.deliveryBackendService.getProducts().subscribe(products => this.productList = products);
  }

  addToCart() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(ProductDialogComponent, dialogConfig);
  }
}

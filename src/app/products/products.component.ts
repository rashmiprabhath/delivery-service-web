import {Component, OnInit} from '@angular/core';
import {DeliveryBackendService} from '../delivery-backend.service';
import {Product} from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name: string;
  productList: Product[];

  constructor(private deliveryBackendService: DeliveryBackendService) {
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

}

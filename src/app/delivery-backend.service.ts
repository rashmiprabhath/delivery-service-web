import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from './models/product';

@Injectable({
  providedIn: 'root'
})
export class DeliveryBackendService {

  testUrl = 'test';
  productUrl = 'product';

  constructor(private http: HttpClient) {
  }

  getName(): Observable<Test[]> {
    return this.http.get<Test[]>(environment.backend_url + this.testUrl);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backend_url + this.productUrl);
  }

}

export interface Test {
  id: number
  name: string;

}

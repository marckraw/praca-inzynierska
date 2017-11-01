import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './models/product';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product) {
      console.dir(product);
      console.log('Dodaje do bazy produktow');

      return this.http.post('http://localhost:8080/api/product/add', product);
  }

  showProducts() {
      return this.http.get('http://localhost:8080/api/product');
  }

}

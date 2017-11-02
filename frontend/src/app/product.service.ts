import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Product } from "./models/product";

@Injectable()
export class ProductService {
    private apiUrl: string = "http://localhost:8080/api/";

    constructor(private http: HttpClient) { }

    public addProduct(product: Product) {
        console.dir(product);
        console.log("Dodaje do bazy produktow");

        return this.http.post(`${this.apiUrl}product/add`, product);
    }

    public showProducts() {
        return this.http.get(`${this.apiUrl}product`);
    }

}

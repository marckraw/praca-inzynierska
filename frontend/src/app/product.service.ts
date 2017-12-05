import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { IProduct } from "./models/product";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
    private apiUrl: string = "http://localhost:8080/";

    constructor(private http: HttpClient) { }

    public addProduct(product: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.set("Content-Type", "applications/json");

        console.log("Dodaje do bazy produktów: ", product);
        return this.http.post(`${this.apiUrl}products/add`, product, { headers } );
    }

    public showProducts(): Observable<any> {
        return this.http.get(`${this.apiUrl}products`);
    }
}

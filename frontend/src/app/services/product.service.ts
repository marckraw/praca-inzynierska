import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { IProduct } from "../models/product.interface";

import { API_URL } from "../shared/constants";

@Injectable()
export class ProductService {
    private apiUrl: string = API_URL;

    constructor(private http: HttpClient) { }

    public addProduct(product: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.set("Content-Type", "applications/json");

        return this.http.post(`${this.apiUrl}products/add`, product, { headers });
    }

    public showProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.apiUrl}products`);
    }

    public removeProduct(product: any): Observable<any> {
        return this.http.request("delete", `${this.apiUrl}products/remove`, { body: product });
    }

    public editProduct(product: any): Observable<any> {
        const headers = new HttpHeaders();
        headers.set("Content-Type", "applications/json");

        return this.http.put(`${this.apiUrl}products/edit`, product, { headers });
    }
}

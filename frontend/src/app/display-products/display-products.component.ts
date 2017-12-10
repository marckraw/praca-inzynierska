import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { IProduct } from "./../models/product";
import { ProductService } from "./../product.service";

@Component({
    selector: "pi-display-products",
    template:
    `
    <div class="display-product-container">
        <h1>Wszystkie produkty</h1>
        <table *ngIf="(products | async) as products; else loading">
            <thead>
                <tr>
                    <th>id</th>
                    <th>index</th>
                    <th>Name</th>
                    <th>Company name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Weight</th>
                    <th>Category</th>
                    <th>qType</th>
                    <th>Tags</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let product of products; let i = index">
                    <td><strong>?</strong></td>
                    <td><strong>{{ i }}</strong></td>
                    <td>{{ product.productName }} </td>
                    <td>{{ product.productCompany }}</td>
                    <td>{{ product.productImage }}</td>
                    <td>{{ product.productPrice }}</td>
                    <td>{{ product.productWeight }}</td>
                    <td>{{ product.productCategory }}</td>
                    <td>{{ product.productQuantitativeType }}</td>
                    <td>{{ product.productTags }}</td>
                    <td><button mat-raised-button color="primary" (click)="edit()">EDIT</button></td>
                    <td><button mat-raised-button color="primary" (click)="remove()">DELETE</button></td>
                </tr>
            </tbody>
        </table>

        <ng-template #loading>loading data...</ng-template>

    </div>
    `,
    styleUrls: ["./display-products.component.scss"],
})
export class DisplayProductsComponent implements OnInit {

    public products: Observable<IProduct[]>;

    constructor(private productService: ProductService) {}

    public ngOnInit() {
        this.showAllProducts();
    }

    public showAllProducts() {
        this.productService.showProducts().subscribe( (val) => console.log(val) );
        this.products = this.productService.showProducts();
    }

    public edit() {
        console.log("Editing...");
    }

    public remove(i) {
        console.log("Removing...");
    }
 }

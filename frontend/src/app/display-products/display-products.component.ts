import { Component, OnInit } from "@angular/core";

import { ProductService } from "./../product.service";
import { IProduct } from "./../models/product";

@Component({
    selector: "pi-display-products",
    template:
    `
    <div class="display-product-container">
        <h1>Wszystkie produkty</h1>
        <table>
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
                    <td><strong>{{ product.id }}</strong></td>
                    <td><strong>{{ i }}</strong></td>
                    <td>{{ product.name }} </td>
                    <td>{{ product.company }}</td>
                    <td>{{ product.image }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.weight }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.quantitativeType }}</td>
                    <td>{{ product.tags }}</td>
                    <td><button mat-raised-button color="primary" (click)="edit()">EDIT</button></td>
                    <td><button mat-raised-button color="primary" (click)="remove(i)">DELETE</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    `,
    styleUrls: ["./display-products.component.scss"],
})
export class DisplayProductsComponent implements OnInit {

    public products: IProduct[];

    constructor(private productService: ProductService) {}

    public ngOnInit() {
        this.showAllProducts();
        console.dir(this.products);
    }

    public showAllProducts() {
        this.productService.showProducts().subscribe( (data: IProduct[]) => this.products = data);
    }

    public edit() {
        console.log("editing");
    }

    public remove(i) {
        // this.products = this.products
        //     .filter( (product) => {
        //         return product.id !== id;
        //     });

        this.productService.removeProduct(i)
            .subscribe( (res) => {
                console.dir(res);
                this.products = this.products
                .filter( (prod) => {
                    return prod.id !== i;
                });
            });

        console.dir(this.products);

        console.log("removing");
    }
 }

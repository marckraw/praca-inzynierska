import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { EditProductComponent } from "../edit-product/edit-product.component";
import { IProduct } from "./../models/product.interface";
import { ProductService } from "./../services/product.service";

@Component({
    selector: "pi-manage-products",
    template:
        `
    <div class="manage-product-container">
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
                    <td>{{ product.productCompanyName }}</td>
                    <td>{{ product.productImage }}</td>
                    <td>{{ product.productPrice }}</td>
                    <td>{{ product.productWeight }}</td>
                    <td>{{ product.productCategory }}</td>
                    <td>{{ product.productQuantitativeType }}</td>
                    <td>{{ product.productTags }}</td>
                    <td><button mat-raised-button color="primary" (click)="edit(product)">EDIT</button></td>
                    <td><button mat-raised-button color="primary" (click)="remove(product)">DELETE</button></td>
                </tr>
            </tbody>
        </table>

        <ng-template #loading>loading data...</ng-template>

    </div>
    `,
    styleUrls: ["./manage-products.component.scss"],
})
export class ManageProductsComponent implements OnInit {

    public products: Observable<IProduct[]>;

    constructor(
        private productService: ProductService,
        private dialog: MatDialog,
    ) { }

    public ngOnInit() {
        this.showAllProducts();
    }

    public showAllProducts() {
        this.productService.showProducts().subscribe((val) => console.log(val));
        this.products = this.productService.showProducts();
    }

    public edit(product) {
        const dialogRef = this.dialog.open(EditProductComponent, {
            width: "600px",
            data: { product, confirmed: false },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result.confirmed) {
                    console.log("teraz powinienem zaktualizowac dane");
                    console.log("This is changed product: ", result);
                    // this.incomeService.addIncome(result.income).subscribe((data) => console.dir(data));
                    // console.log("Dane gotowe do wysłania do końcówki, ", result.income);
                } else {
                    console.log("Nie potwierdziles danych. Popraw je...");
                }
            } else {
                console.log("poszedles w pizdu");
            }
        });
    }

    public remove(product) { this.productService.removeProduct(product).subscribe( () => this.showAllProducts()); }
}

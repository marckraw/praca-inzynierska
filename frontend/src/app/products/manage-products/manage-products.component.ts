import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { IProduct } from "./../../models/product.interface";
import { ProductService } from "./../../services/product.service";
import { EditProductComponent } from "./../edit-product/edit-product.component";

@Component({
    selector: "app-manage-products",
    templateUrl: "manage-products.component.html",
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
        this.products = this.productService.showProducts();
    }

    public edit(product) {
        const dialogRef = this.dialog.open(EditProductComponent, {
            data: { product, confirmed: false },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result.confirmed) {
                    this.productService.editProduct(result.product)
                        .subscribe(() => this.showAllProducts());
                } else {
                    console.log("Nie potwierdziles danych. Popraw je...");
                }
            } else {
                console.log("poszedles w pizdu");
            }
        });
    }

    public remove(product) {
        this.productService.removeProduct(product)
            .subscribe(() => this.showAllProducts());
    }
}

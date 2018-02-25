import { Component, OnInit } from "@angular/core";

import { MatDialog } from "@angular/material";
import { Observable } from "rxjs/Observable";
import { IProduct } from "./../../models/product.interface";
import { ProductService } from "./../../services/product.service";
import { EditProductComponent } from "./../edit-product/edit-product.component";

@Component({
    selector: "pi-manage-products",
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
        this.productService.showProducts().subscribe((val) => console.log(val));
        this.products = this.productService.showProducts();
    }

    public edit(product) {
        const dialogRef = this.dialog.open(EditProductComponent, {
            data: { product, confirmed: false },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result.confirmed) {
                    console.log("teraz powinienem zaktualizowac dane");
                    console.log("This is changed product: ", result);
                    this.productService.updateProduct(result.product).subscribe((data) => console.dir(data));
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

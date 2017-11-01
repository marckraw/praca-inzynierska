import { Component } from "@angular/core/";
import { FormBuilder, FormGroup } from "@angular/forms";

import { Product } from "../models/product";
import { ProductService } from "../product.service";
import { MaterialModule } from "./../material.module";

@Component({
    selector: "pi-adding-product",
    template: `
        <div class="adding-products-container" [formGroup]="formGroup">
            <h1>Adding products Module</h1>
            <div class="adding-products-form">
                <mat-form-field>
                    <input matInput type="text" [formControlName]="'productName'" placeholder="Product Name">
                    <mat-hint align="end">Insert product name</mat-hint>
                </mat-form-field>

                <mat-form-field>
                    <input matInput type="number" [formControlName]="'productPrice'" placeholder="Product price">
                    <span matPrefix>PLN&nbsp;</span>
                    <mat-hint align="end">Insert cost</mat-hint>
                </mat-form-field>

                <mat-form-field>
                    <input matInput type="text" [formControlName]="'productCompanyName'" placeholder="Product Company Name">
                    <mat-hint align="end">Insert product Company name</mat-hint>
                </mat-form-field>

                <mat-form-field>
                    <input matInput type="text" [formControlName]="'productImage'" placeholder="Product Image">
                    <mat-hint align="end">Send picture of a product</mat-hint>
                </mat-form-field>

                <mat-form-field>
                    <input matInput type="text" [formControlName]="'productWeight'" placeholder="Product Weight">
                    <mat-hint align="end">Insert product weight</mat-hint>
                </mat-form-field>

                <mat-form-field>
                    <input matInput type="text" [formControlName]="'productCategory'" placeholder="Product Category">
                    <mat-hint align="end">Choose proudct Category</mat-hint>
                </mat-form-field>

                <mat-form-field>
                    <input matInput type="text" [formControlName]="'productQuantitativeType'" placeholder="Product Quantitative Type">
                    <mat-hint align="end">Choose product Quantitative Type</mat-hint>
                </mat-form-field>

                <mat-form-field>
                    <input matInput type="text" [formControlName]="'productTags'" placeholder="Product Tags">
                    <mat-hint align="end">Select product tags</mat-hint>
                </mat-form-field>

                <div class="buttons">
                    <button class="cancel-btn" mat-raised-button>Cancel</button>
                    <button class="cancel-btn" mat-raised-button color="secondary" (click)="showAllProducts()">Show All products</button>
                    <button class="add-btn" mat-raised-button color="primary" (click)="addProduct(formGroup.value)">Add</button>
                </div>
            </div>
        </div>
`,
    styleUrls: ["./adding-product.component.scss"],
})
export class AddingProductComponent {
    public formGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private product: ProductService,
    ) {
        this.createForm();
    }

    public addProduct(product: Product) {
        this.product.addProduct(product).subscribe( (data) => console.dir(data));
    }

    public showAllProducts() {
        this.product.showProducts().subscribe( (data) => console.dir(data));
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            productName: [""],
            productPrice: [""],
            productCompanyName: [""],
            productWeight: [""],
            productTags: [""],
            productQuantitativeType: [""],
            productImage: [""],
            productCategory: [""],
        });
    }
}

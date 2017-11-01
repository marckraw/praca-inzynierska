import { Component } from "@angular/core/";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
                    <mat-select placeholder="Product Category" [(ngModel)]="selectedCategory" name="category" [formControlName]="'productCategory'">
                        <mat-option *ngFor="let category of categories" [value]="category.viewValue">
                            {{ category.viewValue }}
                        </mat-option>
                    </mat-select>
                    <mat-hint align="end">Choose proudct Category</mat-hint>
                </mat-form-field>

                <mat-form-field>
                    <mat-select placeholder="Product Quantitative Type" [(ngModel)]="selectedType" name="type" [formControlName]="'productQuantitativeType'">
                        <mat-option *ngFor="let type of qType" [value]="type.viewValue">
                            {{ type.viewValue }}
                        </mat-option>
                    </mat-select>
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

            <mat-card *ngIf="isErrorMsgVisible && !formGroup.valid">
                <mat-card-content>
                    <p style="text-align: center; color: red; font-size: 16px;">Wprowadź wszystkie dane</p>
                </mat-card-content>
            </mat-card>
        </div>
`,
    styleUrls: ["./adding-product.component.scss"],
})
export class AddingProductComponent {

    public isErrorMsgVisible = false;
    public formGroup: FormGroup;
    public selectedCategory: string;
    public selectedType: string;
    public categories = [
        {value: "miesa_wedliny", viewValue: "Mięsa i wędliny"},
        {value: "pieczywo", viewValue: "Pieczywo"},
        {value: "przyprawy", viewValue: "Przyprawy"},
        {value: "kawa_i_herbata", viewValue: "Kawa i herbata"},
        {value: "sery_jogurty_i_mleczne", viewValue: "Sery, jogurty i mleczne"},
        {value: "dania_gotowe_i_sosy", viewValue: "Dania gotowe i sosy"},
    ];
    public qType = [
        {value: "by_quantity", viewValue: "Quantity"},
        {value: "by_weight", viewValue: "Weight"},
    ];

    constructor(
        private formBuilder: FormBuilder,
        private product: ProductService,
    ) {
        this.createForm();
    }

    public addProduct(product: Product) {
        if(this.formGroup.valid) {
            this.product.addProduct(product).subscribe( (data) => console.dir(data));
        } else {
            this.isErrorMsgVisible = true;
        }
    }

    public showAllProducts() {
        this.product.showProducts().subscribe( (data) => console.dir(data));
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            productName: ["", [Validators.required]],
            productPrice: ["", [Validators.required]],
            productCompanyName: ["", [Validators.required]],
            productWeight: ["", [Validators.required]],
            productTags: ["", [Validators.required]],
            productQuantitativeType: ["", [Validators.required]],
            productImage: ["", [Validators.required]],
            productCategory: ["", [Validators.required]],
        });
    }
}

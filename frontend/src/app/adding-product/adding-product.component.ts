import { Component } from "@angular/core/";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";

import { ConfirmationModalComponent } from "../confirmation-modal/confirmation-modal.component";
import { ProductService } from "../services/product.service";
import { MaterialModule } from "./../material.module";

@Component({
    selector: "pi-adding-product",
    template:
    `
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
                <mat-select placeholder="Product Category" name="category" [formControlName]="'productCategory'">
                    <mat-option *ngFor="let category of categories" [value]="category.value">
                        {{ category.viewValue }}
                    </mat-option>
                </mat-select>
                <mat-hint align="end">Choose proudct Category</mat-hint>
            </mat-form-field>

            <mat-form-field>
                <mat-select placeholder="Product Quantitative Type" name="type" [formControlName]="'productQuantitativeType'">
                    <mat-option *ngFor="let type of qType" [value]="type.value">
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
                <button class="cancel-btn" mat-raised-button routerLink="/dashboard">Cancel</button>
                <button class="cancel-btn" mat-raised-button color="secondary" routerLink="/show-products">Show All products</button>
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

    constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private product: ProductService) {
        this.createForm();
    }

    public addProduct(product: any) {
        if (this.formGroup.valid) {
            const dialogRef = this.dialog.open(ConfirmationModalComponent, {
                width: "500px",
                data: { product, confirmed: false },
            });
            dialogRef.afterClosed().subscribe( result => {
                console.log("Dialog was closed", result);
                if (result.confirmed) {
                    this.product.addProduct(result.product).subscribe( (data) => console.dir(data));
                } else {
                    console.log("Nie potwierdziles danych. Popraw je...");
                }
            });
        } else {
            this.isErrorMsgVisible = true;
        }
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

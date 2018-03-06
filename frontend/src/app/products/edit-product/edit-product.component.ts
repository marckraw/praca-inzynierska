import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { IEditProduct } from "../../models/edit-product.interface";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.scss"],
})
export class EditProductComponent {
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
        public dialogRef: MatDialogRef<EditProductComponent>, @Inject(MAT_DIALOG_DATA) public data: IEditProduct,
    ) {}

    public ngOnInit(): void { this.createForm(); }
    public onNoClick(): void { this.dialogRef.close(this.data); }
    public cancel(): void { this.dialogRef.close(this.data); }

    public confirm(): void {
        if (this.formGroup.valid) {
            this.data.confirmed = true;
            this.data.product = this.formGroup.value;
            this.dialogRef.close(this.data);
        } else {
            this.isErrorMsgVisible = true;
        }
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            _id: [this.data.product._id],
            productName: [this.data.product.productName, [Validators.required]],
            productPrice: [this.data.product.productPrice, [Validators.required]],
            productCompanyName: [this.data.product.productCompanyName, [Validators.required]],
            productWeight: [this.data.product.productWeight, [Validators.required]],
            productTags: [this.data.product.productTags, [Validators.required]],
            productQuantitativeType: [this.data.product.productQuantitativeType, [Validators.required]],
            productImage: [this.data.product.productImage, [Validators.required]],
            productCategory: [this.data.product.productCategory, [Validators.required]],
        });
    }
}

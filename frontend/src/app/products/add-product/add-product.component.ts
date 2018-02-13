import { GenericSnackbarComponent } from "./../../generic-snackbar/generic-snackbar.component";
import { Component } from "@angular/core/";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatSnackBar } from "@angular/material";

import { ConfirmationModalComponent } from "../../confirmation-modal/confirmation-modal.component";
import { ProductService } from "../../services/product.service";
import { MaterialModule } from "./../../material.module";

@Component({
    selector: "pi-add-product",
    templateUrl: "./add-product.component.html",
    styleUrls: ["./add-product.component.scss"],
})
export class AddProductComponent {

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
        private dialog: MatDialog,
        private formBuilder: FormBuilder,
        private product: ProductService,
        public snackBar: MatSnackBar,
    ) {
        this.createForm();
    }

    public openSnackBar(data) {
        this.snackBar.openFromComponent(GenericSnackbarComponent, {
            duration: 1000,
            data,
        });
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

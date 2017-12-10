import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";

import { ConfirmationModalComponent } from "./../confirmation-modal/confirmation-modal.component";

@Component({
    selector: "pi-add-revenue",
    templateUrl: "./add-revenue.component.html",
    styleUrls: ["./add-revenue.component.scss"],
})
export class AddRevenueComponent {
    public isErrorMsgVisible = false;
    public formGroup: FormGroup;
    public selectedCategory: string;
    public selectedType: string;
    public paymentMethods = [
        {value: "visa", viewValue: "Karta bankowa"},
        {value: "transfer", viewValue: "Przelew"},
        {value: "cash", viewValue: "Gotówka"},
    ];

    constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
        this.createForm();
    }

    public addIncome(income: any) {
        if (this.formGroup.valid) {
            const dialogRef = this.dialog.open(ConfirmationModalComponent, {
                width: "500px",
                data: { income, confirmed: false },
            });
            dialogRef.afterClosed().subscribe( result => {
                console.log("Dialog was closed", result);
                if (result.confirmed) {
                    console.log("Dane gotowe do wysłania do końcówki, ", result.income);
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
            name: ["", [Validators.required]],
            when: ["", [Validators.required]],
            paymentMethod: ["", [Validators.required]],
            income: ["", [Validators.required]],
        });
    }
}

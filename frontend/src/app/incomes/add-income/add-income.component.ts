import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";

import { HardcodedData } from "../../hardcoded-data/expense-category";
import { IncomeService } from "../../services/income.service";
import { ConfirmationModalComponent } from "./../../confirmation-modal/confirmation-modal.component";

@Component({
    selector: "app-add-income",
    templateUrl: "./add-income.component.html",
    styleUrls: ["./add-income.component.scss"],
})
export class AddIncomeComponent {
    public isErrorMsgVisible = false;
    public formGroup: FormGroup;
    public selectedCategory: string;
    public selectedType: string;
    public paymentMethods = HardcodedData.paymentMethods;

    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private incomeService: IncomeService,
    ) {
        this.createForm();
    }

    public addIncome(income: any) {
        if (this.formGroup.valid) {
            const dialogRef = this.dialog.open(ConfirmationModalComponent, {
                width: "500px",
                data: { income, confirmed: false },
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result.confirmed) {
                    this.incomeService.addIncome(result.income).subscribe();
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
            value: ["", [Validators.required]],
        });
    }
}

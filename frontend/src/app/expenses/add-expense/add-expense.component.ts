import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";

import { ConfirmationModalComponent } from "./../../confirmation-modal/confirmation-modal.component";
import { IExpense } from "./../../models/expense.interface";
import { ExpenseService } from "./../../services/expense.service";

@Component({
    selector: "pi-add-expense",
    templateUrl: "./add-expense.component.html",
    styleUrls: ["./add-expense.component.scss"],
})
export class AddExpenseComponent {
    public isErrorMsgVisible = false;
    public formGroup: FormGroup;
    public selectedCategory: string;
    public selectedType: string;
    public paymentMethods = [
        { value: "visa", viewValue: "Karta bankowa" },
        { value: "transfer", viewValue: "Przelew" },
        { value: "cash", viewValue: "Gotówka" },
    ];

    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private expenseService: ExpenseService,
    ) {
        this.expenseService.showExpenses().subscribe();
        this.createForm();
    }

    public addExpense(expense: IExpense) {
        if (this.formGroup.valid) {
            const dialogRef = this.dialog.open(ConfirmationModalComponent, {
                width: "500px",
                data: { expense, confirmed: false },
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result.confirmed) {
                    this.expenseService.addExpense(result.expense)
                        .subscribe();
                } else {
                    console.log("Nie potwierdziles danych. Popraw je...");
                }
            });

        } else {
            this.isErrorMsgVisible = true;
        }
    }

    public calcTotal() {
        return this.formGroup.controls.cost.value * this.formGroup.controls.qt.value;
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            name: ["", [Validators.required]],
            where: ["", [Validators.required]],
            when: ["", [Validators.required]],
            qt: ["", [Validators.required]],
            paymentMethod: ["", [Validators.required]],
            cost: ["", [Validators.required]],
            totalCost: [{ value: "", disabled: true }],
        });
    }
}

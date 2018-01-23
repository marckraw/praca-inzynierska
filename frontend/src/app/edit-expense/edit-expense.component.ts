import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { IEditExpense } from "../models/edit-expense.interface";

@Component({
  selector: "pi-edit-expense",
  templateUrl: "./edit-expense.component.html",
  styleUrls: ["./edit-expense.component.scss"],
})
export class EditExpenseComponent {

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
        public dialogRef: MatDialogRef<EditExpenseComponent>, @Inject(MAT_DIALOG_DATA) public data: IEditExpense,
    ) {}

    public ngOnInit() {
        console.log("Dane do edycji z Manage Expense: ", this.data);

        this.createForm();
        this.calcTotal();
    }

    public onNoClick(): void {
        this.dialogRef.close(this.data);
    }

    public cancel(): void {
        this.dialogRef.close(this.data);
    }

    public confirm(): void {
        if (this.formGroup.valid) {
            this.data.confirmed = true;
            this.data.expense = this.formGroup.value;
            this.dialogRef.close(this.data);
        } else {
            this.isErrorMsgVisible = true;
        }
    }

    public calcTotal() {
        return this.formGroup.controls.cost.value * this.formGroup.controls.qt.value;
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            name: [this.data.expense.name, [Validators.required]],
            where: [this.data.expense.where, [Validators.required]],
            when: [this.data.expense.when, [Validators.required]],
            qt: [this.data.expense.qt, [Validators.required]],
            paymentMethod: [this.data.expense.paymentMethod, [Validators.required]],
            cost: [this.data.expense.cost, [Validators.required]],
            totalCost: [{ value: "", disabled: true }],
        });
    }

}

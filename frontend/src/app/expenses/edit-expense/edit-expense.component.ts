import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { HardcodedData } from "../../hardcoded-data/expense-category";
import { IEditExpense } from "../../models/edit-expense.interface";

@Component({
  selector: "app-edit-expense",
  templateUrl: "./edit-expense.component.html",
  styleUrls: ["./edit-expense.component.scss"],
})
export class EditExpenseComponent {

    public isErrorMsgVisible = false;
    public formGroup: FormGroup;
    public selectedCategory: string;
    public selectedType: string;
    public paymentMethods = HardcodedData.paymentMethods;
    public expenseCategories = HardcodedData.expenseCategories;

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditExpenseComponent>, @Inject(MAT_DIALOG_DATA) public data: IEditExpense,
    ) {}

    public ngOnInit() {
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
            this.data.expense = this.formGroup.getRawValue();
            this.dialogRef.close(this.data);
        } else {
            this.isErrorMsgVisible = true;
        }
    }

    public calcTotal() {
        const sum = this.formGroup.controls.cost.value * this.formGroup.controls.qt.value;
        this.formGroup.controls.totalCost.setValue(sum);
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            _id: [this.data.expense._id],
            name: [this.data.expense.name, [Validators.required]],
            where: [this.data.expense.where, [Validators.required]],
            when: [this.data.expense.when, [Validators.required]],
            qt: [this.data.expense.qt, [Validators.required]],
            paymentMethod: [this.data.expense.paymentMethod, [Validators.required]],
            cost: [this.data.expense.cost, [Validators.required]],
            expenseCategory: [this.data.expense.expenseCategory, [Validators.required]],
            totalCost: [{ value: "", disabled: true }],
            choosedBudget: [this.data.expense.choosedBudget],
            choosedBudgetCategory: [this.data.expense.choosedBudgetCategory],
        });
    }

}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from "@angular/forms";
import { MatDialog } from "@angular/material";

import { budgets } from "../../example-db/budgets";
import { expenses } from "../../example-db/expenses";
import { HardcodedData } from "../../hardcoded-data/expense-category";
import { ConfirmationModalComponent } from "./../../confirmation-modal/confirmation-modal.component";
import { IExpense } from "./../../models/expense.interface";
import { ExpenseService } from "./../../services/expense.service";

@Component({
    selector: "app-add-expense",
    templateUrl: "./add-expense.component.html",
    styleUrls: ["./add-expense.component.scss"],
})
export class AddExpenseComponent {
    public budgets: FormArray;
    public allBudgets;
    public isBudgetsLoaded: boolean = false;
    public isBudgetChoosed: boolean = false;
    public isErrorMsgVisible = false;
    public formGroup: FormGroup;
    public selectedCategory: string;
    public selectedType: string;
    public paymentMethods = HardcodedData.paymentMethods;
    public expenseCategories = HardcodedData.expenseCategories;

    public toppings = new FormControl();
    public toppingList = ["Extra cheese", "Mushroom", "Onion", "Pepperoni", "Sausage", "Tomato"];

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
                    console.log(result.expense);
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

    public createBudgets(): FormGroup {
        return this.formBuilder.group({
            budgetId: [],
            categoryId: [],
        });
    }

    public addBudgetToBudgetsControl() {
        this.budgets = this.formGroup.get("budgets") as FormArray;
        this.budgets.push(this.createBudgets());
    }

    public addBudgets() {
        this.allBudgets = budgets;
        this.isBudgetsLoaded = true;

        this.addBudgetToBudgetsControl();

        console.log(this.allBudgets);
        console.log(expenses);
    }

    public checkFormValues() {
        console.log(this.formGroup.controls);
        console.log(this.formGroup.value);
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            name: ["", [Validators.required]],
            where: ["", [Validators.required]],
            when: ["", [Validators.required]],
            qt: ["", [Validators.required]],
            paymentMethod: ["", [Validators.required]],
            cost: ["", [Validators.required]],
            expenseCategory: ["", [Validators.required]],
            budgets: this.formBuilder.array([]),
            totalCost: [{ value: "", disabled: true }],
            budgetsChoose: [],
        });
    }
}

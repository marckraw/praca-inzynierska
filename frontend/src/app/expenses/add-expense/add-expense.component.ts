import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";

import { expenses } from "../../example-db/expenses";
import { HardcodedData } from "../../hardcoded-data/expense-category";
import { BudgetService } from "../../services/budget.service";
import { ConfirmationModalComponent } from "./../../confirmation-modal/confirmation-modal.component";
import { IExpense } from "./../../models/expense.interface";
import { ExpenseService } from "./../../services/expense.service";

@Component({
    selector: "app-add-expense",
    templateUrl: "./add-expense.component.html",
    styleUrls: ["./add-expense.component.scss"],
})
export class AddExpenseComponent {
    public formNotSubmitted = true;
    public budgets: FormArray;
    public allBudgets = [];
    public budgetCategories = [];
    public isBudgetsLoaded: boolean = false;
    public isBudgetChoosed: boolean = false;
    public isErrorMsgVisible = false;
    public formGroup: FormGroup;
    public selectedCategory: string;
    public selectedType: string;
    public paymentMethods = HardcodedData.paymentMethods;
    public expenseCategories = HardcodedData.expenseCategories;

    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private expenseService: ExpenseService,
        private budgetService: BudgetService,
    ) {
        this.expenseService.showExpenses().subscribe();
        this.createForm();
    }

    public ngOnInit() {
        this.budgetService.showAllBudgets().subscribe(budgets => {
            this.allBudgets = budgets;
            console.log(this.allBudgets);
        });
        this.budgetCategories = [];
    }

    public addExpense() {
        const expense = this.formGroup.getRawValue();
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
        const sum = this.formGroup.controls.cost.value * this.formGroup.controls.qt.value;
        this.formGroup.controls.totalCost.setValue(sum);
    }

    public addBudgets() {
        this.isBudgetsLoaded = true;
    }

    public selectionChange() {
        const choosedBudgetId = this.formGroup.controls.choosedBudget.value;

        console.log(choosedBudgetId);

        const filteredSingleBudget = this.allBudgets.filter( (budget) => budget._id === choosedBudgetId);
        this.budgetCategories = filteredSingleBudget[0].categories;
        console.log(this.budgetCategories);
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
            totalCost: [{value: 0, disabled: true}],
            choosedBudget: [""],
            choosedBudgetCategory: [""],
        });
    }
}

import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { filter } from "rxjs/operators";

import { MatDialog } from "@angular/material";
import { HardcodedData } from "../../hardcoded-data/expense-category";
import { IExpense } from "../../models/expense.interface";
import { ExpenseService } from "../../services/expense.service";
import { EditExpenseComponent } from "../edit-expense/edit-expense.component";

@Component({
    selector: "app-manage-expenses",
    templateUrl: "./manage-expenses.component.html",
    styleUrls: ["./manage-expenses.component.scss"],
})
export class ManageExpensesComponent {
    public expenses$: Observable<IExpense[]>;

    public isExpenseCategoryLoaded: boolean = false;
    public isPaymentMethodLoaded: boolean = false;

    public chartOptions = {
        legend: {
            display: false,
         },
         tooltips: {
            enabled: true,
         },
    };

    public barChartOptions = {
        legend: {
            display: false,
        },
        tooltips: {
            enabled: true,
        },
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
                },
            }],
            xAxes: [{
                ticks: {
                    display: false,
                },
            }],
        },
    };

    public expenses: IExpense[];
    public expenseCategoryChartLabels: string[] = HardcodedData.expenseCategories.map( category => category.viewValue);
    public expenseCategoryChartData: number[] = [];

    public paymentMethodChartLabels: string[] = HardcodedData.paymentMethods.map( payment => payment.viewValue);
    public paymentMethodChartData: number[] = [];

    constructor(
        private expenseService: ExpenseService,
        private dialog: MatDialog,
    ) { }

    public ngOnInit() {
        this.showAllExpenses();
    }

    public showAllExpenses() {
        this.expenseCategoryChartData = [];
        this.paymentMethodChartData = [];
        this.isExpenseCategoryLoaded = false;
        this.isPaymentMethodLoaded = false;

        this.expenseService.showExpenses().subscribe(
            expenses => {
                this.expenses = expenses;
                this.expenseCategoryChartLabels.map( category => {
                    const filteredCategory = this.expenses.filter( expense => expense.expenseCategory === category);
                    if (!filteredCategory) {
                        const acc = 0;
                    }
                    const acc = filteredCategory.reduce( (prev, curr) => prev + curr.totalCost, 0);

                    this.expenseCategoryChartData.push(acc);
                });
                this.isExpenseCategoryLoaded = true;

                this.paymentMethodChartLabels.map( method => {
                    const filteredPayment = this.expenses.filter( expense => expense.paymentMethod === method);
                    if (!filteredPayment) {
                        const acc = 0;
                    }
                    const acc = filteredPayment.reduce( (prev, curr) => prev + curr.totalCost, 0);

                    this.paymentMethodChartData.push(acc);
                });
                this.isPaymentMethodLoaded = true;
            },
        );
        this.expenses$ = this.expenseService.showExpenses();
    }

    public edit(expense) {
        const dialogRef = this.dialog.open(EditExpenseComponent, {
            data: { expense, confirmed: false },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result.confirmed) {
                    this.expenseService.editExpense(result.expense).subscribe( (data) => {
                        this.showAllExpenses();
                    });
                } else {
                    console.log("Nie potwierdziles danych. Popraw je...");
                }
            } else {
                console.log("bad happened");
            }
        });
    }

    public remove(expense) {
        this.expenseService.removeExpense(expense).subscribe( removedExpense => this.showAllExpenses());
    }
}

import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { IBudget } from "../models/budget.interface";
import { IExpense } from "../models/expense.interface";
import { BudgetService } from "../services/budget.service";
import { ExpenseService } from "../services/expense.service";

@Component({
    selector: "app-manage-budgets",
    templateUrl: "./manage-budgets.component.html",
    styleUrls: ["./manage-budgets.component.scss"],
})
export class ManageBudgetsComponent {
    public budgets$: Observable<IBudget[]>;

    public isBudgetsLoaded: boolean = false;
    public isBudgetExpenseLoaded: boolean = false;

    public budgets: IBudget[];
    public choosedBudget: IBudget;
    public budgetExpenses: IExpense[];

    public chartOptions = {
        legend: {
            display: false,
         },
         tooltips: {
            enabled: true,
         },
    };

    public categoryCharts = [];

    // public categoryChartLabels: string[] = HardcodedData.paymentMethods.map( payment => payment.viewValue);
    // public categoryChartData: number[] = [];

    constructor(
        private budgetService: BudgetService,
        private expenseService: ExpenseService,
    ) {}

    public ngOnInit() {
        this.budgetService.showBudgets()
            .subscribe( budgets => {
                console.log(budgets);
                this.budgets = budgets;
                this.isBudgetsLoaded = true;
            });
        this.budgets$ = this.budgetService.showBudgets();
    }

    public changeBudget(budgetId) {
        this.categoryCharts = [];

        this.choosedBudget = this.budgets.filter( budget => budget._id === budgetId)[0];
        console.log(this.choosedBudget);

        this.expenseService.showExpenses()
            .subscribe( expenses => {
                this.budgetExpenses = expenses.filter( expense => expense.choosedBudget === this.choosedBudget._id);
                this.isBudgetExpenseLoaded = true;
                console.log(this.budgetExpenses);

                this.choosedBudget.categories
                    .map( category =>
                        category.enteredAmount = this.budgetExpenses
                            .filter( expense => expense.choosedBudgetCategory === category._id)
                            .reduce( (prev, curr) => prev + curr.totalCost , 0),
                    );

                this.choosedBudget.categories
                    .map( category => {
                        const categoryLabels = [category.name, "Pozostało"];
                        const categoryData = [category.enteredAmount, category.declaredAmount - category.enteredAmount];
                        this.categoryCharts.push([categoryLabels, categoryData]);
                    });

                console.log(this.choosedBudget);
                console.log(this.categoryCharts);

            });
    }
}

import { Component } from "@angular/core";
import { IExpense } from "../models/expense.interface";
import { IIncome } from "../models/income.interface";
import { ChartAndAnalyzeService } from "./chart-and-analyze.service";

@Component({
    selector: "app-chart-and-analyze",
    templateUrl: "./chart-and-analyze.component.html",
    styleUrls: ["./chart-and-analyze.component.scss"],
})
export class ChartAndAnalyzeComponent {

    public incomesByMethod;
    public incomes: IIncome[];
    public expenses: IExpense[];

    public sumOfExpenses: number;
    public isSumOfExpensesCalculated: boolean = false;

    public sumOfIncomes: number;
    public isSumOfIncomesCalculated: boolean = false;

    public sumOfIncomesByMethod: number;
    public isSumOfIncomesByMethodCalculated: boolean = false;

    public doughnutChartLabels: string[] = ["Całkowite wydatki", "Całkowite przychody"];
    public doughnutChartData: number[] = [];

    constructor(
        private chartAndAnalyzeService: ChartAndAnalyzeService,
    ) { }

    public ngOnInit() {
        this.chartAndAnalyzeService.getUserIncomesByMethod("Przelew")
            .subscribe( response => {
                this.incomesByMethod = response;
                this.sumOfIncomesByMethod = this.incomesByMethod
                    .reduce( (prev, curr) => prev.value + curr.value, 0);

                this.isSumOfIncomesByMethodCalculated = true;
            });

        this.chartAndAnalyzeService.getUserIncomes()
            .subscribe( response => {
                this.incomes = response;
                this.sumOfIncomes = this.incomes
                    .reduce( (prev, curr) => prev + curr.value, 0);
                this.doughnutChartData[1] = this.sumOfIncomes;
                this.isSumOfIncomesCalculated = true;
            });

        this.chartAndAnalyzeService.getUserExpenses()
        .subscribe( response => {
            this.expenses = response;
            this.sumOfExpenses = this.expenses
                .reduce( (prev, curr: IExpense) => prev + curr.totalCost, 0);
            this.doughnutChartData[0] = this.sumOfExpenses;
            this.isSumOfExpensesCalculated = true;
        });
    }

    private
}

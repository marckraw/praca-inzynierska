import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Observable } from "rxjs/Observable";

import { GenericEditComponent } from "../../generic-edit/generic-edit.component";
import { HardcodedData } from "../../hardcoded-data/expense-category";
import { IIncome } from "../../models/income.interface";
import { IncomeService } from "../../services/income.service";
import { EditIncomeComponent } from "../edit-income/edit-income.component";

@Component({
    selector: "app-manage-incomes",
    templateUrl: "./manage-incomes.component.html",
    styleUrls: ["./manage-incomes.component.scss"],
})
export class ManageIncomesComponent {
    public incomes$: Observable<IIncome[]>;

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

    public incomes: IIncome[];

    public paymentMethodChartLabels: string[] = HardcodedData.paymentMethods.map( payment => payment.viewValue);
    public paymentMethodChartData: number[] = [];

    constructor(
        private incomeService: IncomeService,
        private dialog: MatDialog,
    ) { }

    public ngOnInit() {
        this.showAllIncomes();
    }

    public showAllIncomes() {
        this.paymentMethodChartData = [];
        this.isPaymentMethodLoaded = false;

        this.incomeService.showIncomes().subscribe(
            incomes => {
                this.incomes = incomes;
                this.paymentMethodChartLabels.map( method => {
                    const filteredPayment = this.incomes.filter( expense => expense.paymentMethod === method);
                    if (!filteredPayment) {
                        const acc = 0;
                    }
                    const acc = filteredPayment.reduce( (prev, curr) => prev + curr.value, 0);

                    this.paymentMethodChartData.push(acc);
                });
                this.isPaymentMethodLoaded = true;
            },
        );
        this.incomes$ = this.incomeService.showIncomes();
    }

    public edit(income) {
        const dialogRef = this.dialog.open(EditIncomeComponent, {
            data: { income, confirmed: false },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result.confirmed) {
                    this.incomeService.editIncome(result.income).subscribe( (data) => {
                        this.showAllIncomes();
                    });
                } else {
                    console.log("Nie potwierdziles danych. Popraw je...");
                }
            } else {
                console.log("error happened");
            }
        });
    }

    public remove(income) { this.incomeService.removeIncome(income).subscribe( removedIncome => this.showAllIncomes()); }
}

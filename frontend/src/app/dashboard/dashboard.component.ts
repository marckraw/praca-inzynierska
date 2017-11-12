import { Component } from "@angular/core";

@Component({
    selector: "pi-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {

    public revenueSum: number;
    public expenseSum: number;
    public currentMoney: string;

    public revenues: any = [
        {
            name: "Rockwell Automation",
            revenue: 4275.00,
            when: "10 kazdego miesiaca",
            currency: "PLN",
            auto: true,
            method: "Przelew",
        },
    ];
    public expenses: any = [
        {
            name: "Studia",
            expense: 452.00,
            when: "10 kazdego miesiaca",
            currency: "PLN",
            auto: false,
            method: "Przelew",
        },
        {
            name: "Dropbox",
            expense: 36.41,
            when: "10 kazdego miesiaca",
            currency: "PLN",
            auto: true,
            method: "Karta",
        },
        {
            name: "Spotify",
            expense: 29.99,
            when: "10 kazdego miesiaca",
            currency: "PLN",
            auto: true,
            method: "Card",
        },
        {
            name: "Czynsz mieszkanie",
            expense: 608.00,
            when: "10 kazdego miesiaca",
            currency: "PLN",
            auto: false,
            method: "Przelew",
        },
        {
            name: "Adpbe Photography plan (Lightroom + PS)",
            expense: 42.00,
            when: "10 kazdego miesiaca",
            currency: "PLN",
            auto: true,
            method: "Card",
        },
        {
            name: "Office 365",
            expense: 42.99,
            when: "10 kazdego miesiaca",
            currency: "PLN",
            auto: true,
            method: "Card",
        },
        {
            name: "VPS HitMe",
            expense: 17.00,
            when: "10 kazdego miesiaca",
            currency: "PLN",
            auto: false,
            method: "Przelew",
        },
    ];

    constructor(){}

    public ngOnInit() {
        this.expenseSum = this.expenses.reduce( (prev, curr) => {
                return prev + curr.expense;
        }, 0);

        this.revenueSum = this.revenues.reduce( (prev, curr) => {
                return prev + curr.revenue;
        }, 0);

        this.currentMoney = (this.revenueSum - this.expenseSum).toFixed(2);

    }

}

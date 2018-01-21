import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { IExpense } from "../models/expense.interface";
import { ExpenseService } from "../services/expense.service";

@Component({
    selector: "pi-manage-expenses",
    templateUrl: "./manage-expenses.component.html",
    styleUrls: ["./manage-expenses.component.scss"],
})
export class ManageExpensesComponent {
    public expenses: Observable<IExpense[]>;

    constructor(private expenseService: ExpenseService) { }

    public ngOnInit() {
        this.showAllExpenses();
    }

    public showAllExpenses() {
        this.expenseService.showExpenses().subscribe(val => console.log(val)); // this is only for loggin, temporary
        this.expenses = this.expenseService.showExpenses();
    }
}

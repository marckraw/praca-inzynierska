import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { MatDialog } from "@angular/material";
import { IExpense } from "../../models/expense.interface";
import { ExpenseService } from "../../services/expense.service";
import { EditExpenseComponent } from "../edit-expense/edit-expense.component";

@Component({
    selector: "app-manage-expenses",
    templateUrl: "./manage-expenses.component.html",
    styleUrls: ["./manage-expenses.component.scss"],
})
export class ManageExpensesComponent {
    public expenses: Observable<IExpense[]>;

    constructor(
        private expenseService: ExpenseService,
        private dialog: MatDialog,
    ) { }

    public ngOnInit() {
        this.showAllExpenses();
    }

    public showAllExpenses() {
        this.expenseService.showExpenses().subscribe(val => console.log(val)); // this is only for loggin, temporary
        this.expenses = this.expenseService.showExpenses();
    }

    public edit(expense) {
        const dialogRef = this.dialog.open(EditExpenseComponent, {
            data: { expense, confirmed: false },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result.confirmed) {
                    console.log("teraz powinienem zaktualizowac dane");
                    console.log("This is changed expense: ", result);
                    this.expenseService.editExpense(result.expense).subscribe( (data) => {
                        this.expenses = this.expenseService.showExpenses();
                    });
                } else {
                    console.log("Nie potwierdziles danych. Popraw je...");
                }
            } else {
                console.log("poszedles w pizdu");
            }
        });
    }

    public remove(expense) {
        console.dir(expense);
        this.expenseService.removeExpense(expense).subscribe( removedExpense => this.showAllExpenses());
    }
}

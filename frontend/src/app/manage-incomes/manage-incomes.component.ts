import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Observable } from "rxjs/Observable";

import { GenericEditComponent } from "../generic-edit/generic-edit.component";
import { IIncome } from "../models/income.interface";
import { IncomeService } from "../services/income.service";

@Component({
    selector: "pi-manage-incomes",
    templateUrl: "./manage-incomes.component.html",
    styleUrls: ["./manage-incomes.component.scss"],
})
export class ManageIncomesComponent {
    public incomes: Observable<IIncome[]>;

    constructor(
        private incomeService: IncomeService,
        private dialog: MatDialog,
    ) { }

    public ngOnInit() {
        this.showAllIncomes();
    }

    public showAllIncomes() {
        this.incomeService.showIncomes().subscribe(val => console.log(val)); // only for console log, temporary
        this.incomes = this.incomeService.showIncomes();
    }

    public edit(income) {
        const dialogRef = this.dialog.open(GenericEditComponent, {
            width: "500px,",
            data: income,
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log("GenericEditDialog was closed", result);
        });
    }

    public remove(income) { this.incomeService.removeIncome(income).subscribe( removedIncome => this.showAllIncomes()); }
}

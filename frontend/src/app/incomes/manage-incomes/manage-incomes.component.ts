import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { Observable } from "rxjs/Observable";

import { GenericEditComponent } from "../../generic-edit/generic-edit.component";
import { IIncome } from "../../models/income.interface";
import { IncomeService } from "../../services/income.service";
import { EditIncomeComponent } from "../edit-income/edit-income.component";

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
        const dialogRef = this.dialog.open(EditIncomeComponent, {
            data: { income, confirmed: false },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                if (result.confirmed) {
                    console.log("teraz powinienem zaktualizowac dane");
                    console.log("This is changed income: ", result);
                    // this.incomeService.addIncome(result.income).subscribe((data) => console.dir(data));
                    // console.log("Dane gotowe do wysłania do końcówki, ", result.income);
                } else {
                    console.log("Nie potwierdziles danych. Popraw je...");
                }
            } else {
                console.log("poszedles w pizdu");
            }
        });
    }

    public remove(income) { this.incomeService.removeIncome(income).subscribe( removedIncome => this.showAllIncomes()); }
}

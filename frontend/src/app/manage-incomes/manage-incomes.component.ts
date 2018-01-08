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

    public remove(income) {
        const dialogRef = this.dialog.open(GenericEditComponent, {
            width: "500px,",
            data: income,
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log("GenericEditDialog was closed", result);
        });
    }
}

// public addIncome(income: any) {
//     if (this.formGroup.valid) {
//         const dialogRef = this.dialog.open(ConfirmationModalComponent, {
//             width: "500px",
//             data: { income, confirmed: false },
//         });
//         dialogRef.afterClosed().subscribe(result => {
//             console.log("Dialog was closed", result);
//             if (result.confirmed) {
//                 this.incomeService.addIncome(result.income).subscribe((data) => console.dir(data));
//                 console.log("Dane gotowe do wysłania do końcówki, ", result.income);
//             } else {
//                 console.log("Nie potwierdziles danych. Popraw je...");
//             }
//         });

//     } else {
//         this.isErrorMsgVisible = true;
//     }
// }

// private createForm() {
//     this.formGroup = this.formBuilder.group({
//         name: ["", [Validators.required]],
//         when: ["", [Validators.required]],
//         paymentMethod: ["", [Validators.required]],
//         value: ["", [Validators.required]],
//     });
// }

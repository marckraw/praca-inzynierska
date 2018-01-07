import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { IIncome } from "../models/income.interface";
import { IncomeService } from "../services/income.service";

@Component({
    selector: "pi-manage-incomes",
    templateUrl: "./manage-incomes.component.html",
    styleUrls: ["./manage-incomes.component.scss"],
})
export class ManageIncomesComponent {
    public incomes: Observable<IIncome[]>;

    constructor(private incomeServie: IncomeService) { }
}

import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { IBudget } from "../models/budget.interface";
import { BudgetService } from "../services/budget.service";

@Component({
    selector: "app-manage-budgets",
    templateUrl: "./manage-budgets.component.html",
    styleUrls: ["./manage-budgets.component.scss"],
})
export class ManageBudgetsComponent {
    public budgets: Observable<IBudget[]>;

    constructor(
        private budgetService: BudgetService,
    ) {}

    public ngOnInit() {
        this.budgets = this.budgetService.showAllBudgets();
    }

    public edit(budget: IBudget) {
        console.log("editing...: ", budget);
    }

    public remove(budget: IBudget) { 
        this.budgetService.removeBudget(budget).subscribe( removedBudget => {
            this.budgets = this.budgetService.showAllBudgets();
        }); 
    }

}

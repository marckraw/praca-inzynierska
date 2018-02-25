import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { ConfirmationModalComponent } from "../confirmation-modal/confirmation-modal.component";
import { BudgetService } from "../services/budget.service";

@Component({
    selector: "app-add-budget",
    templateUrl: "./add-budget.component.html",
    styleUrls: ["./add-budget.component.scss"],
})
export class AddBudgetComponent {
    public isErrorMsgVisible = false;
    public formGroup: FormGroup;
    public categories: FormArray;

    constructor(
        private formBuilder: FormBuilder,
        private dialog: MatDialog,
        private budgetService: BudgetService,
    ) { this.createForm(); }

    public addBudget(budget: any) {
        if (this.formGroup.valid) {
            const dialogRef = this.dialog.open(ConfirmationModalComponent, {
                width: "500px",
                data: { budget, confirmed: false },
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result.confirmed) {
                    this.budgetService.addBudget(result.budget).subscribe();
                    console.log("frontend component: ", result.budget);
                    console.log("potwierdziles dane, czas zalozyc budzet po backendzie");
                } else {
                    console.log("Nie potwierdziles danych. Popraw je...");
                }
            });

        } else {
            this.isErrorMsgVisible = true;
        }
    }

    private createCategory(): FormGroup {
        return this.formBuilder.group({
            name: ["", [Validators.required]],
            declaredAmount: [0, [Validators.required]],
            enteredAmount: [0],
        });
    }

    private addCategory() {
        this.categories = this.formGroup.get("categories") as FormArray;
        this.categories.push(this.createCategory());
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            name: ["", [Validators.required]],
            startDate: ["", [Validators.required]],
            endDate: ["", [Validators.required]],
            categories: this.formBuilder.array([ this.createCategory() ]),
        });
    }
}

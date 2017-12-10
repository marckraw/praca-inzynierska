import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
    selector: "pi-confirmation-modal",
    templateUrl: "./confirmation-modal.component.html",
    styleUrls: ["./confirmation-modal.component.scss"],
})
export class ConfirmationModalComponent {

    constructor(
        public dialogRef: MatDialogRef<ConfirmationModalComponent>, @Inject(MAT_DIALOG_DATA) public expense: any,
    ) { }

    public cancel() {
        this.dialogRef.close(this.expense);
    }

    public confirm() {
        this.expense.confirmed = true;
        this.dialogRef.close(this.expense);
    }
}

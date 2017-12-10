import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: "pi-confirmation-modal",
    templateUrl: "./confirmationmodal.component.html",
    styleUrls: ["./confirmationmodal.component.scss"],
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

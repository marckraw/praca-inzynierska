import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { GenericSnackbarComponent } from "./../generic-snackbar/generic-snackbar.component";

@Component({
    selector: "pi-confirmation-modal",
    templateUrl: "./confirmation-modal.component.html",
    styleUrls: ["./confirmation-modal.component.scss"],
})
export class ConfirmationModalComponent {

    constructor(
        public dialogRef: MatDialogRef<ConfirmationModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public snackBar: MatSnackBar,
    ) { }

    public cancel() {
        this.dialogRef.close(this.data);
    }

    public openSnackBar(data) {
        this.snackBar.openFromComponent(GenericSnackbarComponent, {
            duration: 1000,
            data,
        });
    }

    public confirm() {
        this.data.confirmed = true;
        this.openSnackBar(this.data);
        this.dialogRef.close(this.data);
    }
}

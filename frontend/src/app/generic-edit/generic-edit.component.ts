import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
    selector: "pi-generic-edit",
    templateUrl: "./generic-edit.component.html",
    styleUrls: ["./generic-edit.component.scss"],
})
export class GenericEditComponent {
    public editForm: FormGroup;
    public formControls: any;
    public isDataLoaded: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<GenericEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder,
    ) { }

    public cancel() {
        this.dialogRef.close(this.data);
    }

    public ngOnInit() {
        this.formControls = Object.keys(this.data)
            .filter(val => val[0] !== "__");

        this.editForm = this.formBuilder.group({});
        this.editForm.setControl(this.formControls[1], this.formControls[1]);

        this.isDataLoaded = true;
    }
}

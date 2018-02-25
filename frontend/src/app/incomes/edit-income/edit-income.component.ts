import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { IEditIncome } from "../../models/edit-income.interface";

@Component({
  selector: "pi-edit-income",
  templateUrl: "./edit-income.component.html",
  styleUrls: ["./edit-income.component.scss"],
})
export class EditIncomeComponent {
    public isErrorMsgVisible = false;
    public formGroup: FormGroup;
    public selectedCategory: string;
    public selectedType: string;
    public paymentMethods = [
        { value: "visa", viewValue: "Karta bankowa" },
        { value: "transfer", viewValue: "Przelew" },
        { value: "cash", viewValue: "Gotówka" },
    ];

    constructor(
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<EditIncomeComponent>, @Inject(MAT_DIALOG_DATA) public data: IEditIncome,
    ) {}

    public ngOnInit() {
        this.createForm();
    }

    public onNoClick(): void {
        this.dialogRef.close(this.data);
    }

    public cancel(): void {
        this.dialogRef.close(this.data);
    }

    public confirm(): void {
        if (this.formGroup.valid) {
            this.data.confirmed = true;
            this.data.income = this.formGroup.value;
            this.dialogRef.close(this.data);
        } else {
            this.isErrorMsgVisible = true;
        }
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            name: [this.data.income.name, [Validators.required]],
            when: [this.data.income.when, [Validators.required]],
            paymentMethod: [this.data.income.paymentMethod, [Validators.required]],
            value: [this.data.income.value, [Validators.required]],
        });
    }
}

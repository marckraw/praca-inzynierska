import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pi-add-expense",
  templateUrl: "./add-expense.component.html",
  styleUrls: ["./add-expense.component.scss"],
})
export class AddExpenseComponent {
    public isErrorMsgVisible = false;
    public formGroup: FormGroup;
    public selectedCategory: string;
    public selectedType: string;
    public categories = [
        {value: "miesa_wedliny", viewValue: "Mięsa i wędliny"},
        {value: "pieczywo", viewValue: "Pieczywo"},
        {value: "przyprawy", viewValue: "Przyprawy"},
        {value: "kawa_i_herbata", viewValue: "Kawa i herbata"},
        {value: "sery_jogurty_i_mleczne", viewValue: "Sery, jogurty i mleczne"},
        {value: "dania_gotowe_i_sosy", viewValue: "Dania gotowe i sosy"},
    ];
    public qType = [
        {value: "by_quantity", viewValue: "Quantity"},
        {value: "by_weight", viewValue: "Weight"},
    ];

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

    public addExpense(product: any) {
        if (this.formGroup.valid) {
            console.log("add expense");
            // this.product.addProduct(product).subscribe( (data) => console.dir(data));
        } else {
            this.isErrorMsgVisible = true;
        }
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            name: ["", [Validators.required]],
            where: ["", [Validators.required]],
            when: ["", [Validators.required]],
            qt: ["", [Validators.required]],
            paymentMethod: ["", [Validators.required]],
            cost: ["", [Validators.required]],
        });
    }
}

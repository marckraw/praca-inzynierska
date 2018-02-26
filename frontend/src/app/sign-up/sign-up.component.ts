import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-sign-up",
    templateUrl: "./sign-up.component.html",
    styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent {
    public formGroup: FormGroup;
    public isErrorMsgVisible: boolean = false;

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

    public signUp() {
        if (this.formGroup.valid) {
            console.log(this.formGroup.value);
            console.log("to są wartosci ktore przechodza frontendowa validacje");
            this.isErrorMsgVisible = false;
        } else {
            this.isErrorMsgVisible = true;
        }
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            login: ["", [Validators.required]],
            email: ["", [Validators.required]],
            password: ["", [Validators.required]],
            passwordRepeat: ["", [Validators.required]],
        });
    }
}

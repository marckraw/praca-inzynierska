import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
    public formGroup: FormGroup;
    public isErrorMsgVisible: boolean = false;

    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }

    public login() {
        if(this.formGroup.valid) {
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
            password: ["", [Validators.required]],
        });
    }
}

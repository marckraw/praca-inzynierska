import { Component } from "@angular/core";

import { FormControl, Validators } from "@angular/forms";
import { LocalStorage } from "../services/localstorage.service";
import { MyErrorStateMatcher } from "../shared/my-error-state-matcher";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {

    public emailFormControl = new FormControl("", [
        Validators.required,
        Validators.email,
    ]);

    public passwordFormControl = new FormControl("", [
        Validators.required,
    ]);

    public matcher = new MyErrorStateMatcher();

    constructor(private localStorage: LocalStorage) {}

    public register() {
        console.log("rejestrowanie...");
    }
}

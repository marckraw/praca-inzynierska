import { Component } from "@angular/core";

import { FormControl, Validators } from "@angular/forms";
import { LocalStorage } from "../services/localstorage.service";
import { MyErrorStateMatcher } from "../shared/my-error-state-matcher";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent {

    public emailFormControl = new FormControl("", [
        Validators.required,
        Validators.email,
    ]);

    public passwordFormControl = new FormControl("", [
        Validators.required,
    ]);

    public matcher = new MyErrorStateMatcher();

    constructor(private localStorage: LocalStorage) {}

    public login() {
        this.localStorage.setItem({name: "isLoggedIn", content: "yes"});
    }
}

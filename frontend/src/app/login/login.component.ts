import { Component } from "@angular/core";

import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LocalStorage } from "../services/localstorage.service";
import { UserDataRepository } from "../services/user-data.repository";
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

    constructor(
        private localStorage: LocalStorage,
        private userDataRepository: UserDataRepository,
        private router: Router,
    ) {}

    public ngOnInit() {
        this.userDataRepository.logout();
    }

    public login() {
        this.localStorage.setItem({name: "isLoggedIn", content: "yes"});
        this.userDataRepository.loggedIn = true;
        console.log(this.userDataRepository.loggedIn);
        this.router.navigate(["/home/dashboard"]);
    }
}

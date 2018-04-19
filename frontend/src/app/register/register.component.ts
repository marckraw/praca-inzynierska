import { Component } from "@angular/core";

import { FormControl, Validators } from "@angular/forms";
import { LocalStorage } from "../services/localstorage.service";
import { UserDataRepository } from "../services/user-data.repository";
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

    constructor(
        private userDataRepository: UserDataRepository,
    ) {}

    public ngOnInit() {
        this.userDataRepository.logout();
    }

    public register() {
        console.log("register from frontend component");
        const user = {
            email: "marckraw@icloud.com",
            firstName: "Marcin",
            lastName: "Krawczyk",
            password: "1234567890",
        };
        this.userDataRepository.register(user)
            .subscribe(
                (val) => val,
                (response) => console.log(response.statusText),
            );
    }
}

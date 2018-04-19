import { Component } from "@angular/core";

import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
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

    public formGroup: FormGroup;

    public matcher = new MyErrorStateMatcher();

    constructor(
        private localStorage: LocalStorage,
        private userDataRepository: UserDataRepository,
        private router: Router,
        private formBuilder: FormBuilder,
    ) {}

    public ngOnInit() {
        this.createForm();
        this.userDataRepository.logout();
    }

    public login() {
        // const userCredentials = {
        //     email: "marckraw@icloud.com",
        //     password: "1234567890",
        // };

        const userCredentials = this.formGroup.value;

        this.userDataRepository.login2(userCredentials)
            .subscribe(
                response => {
                    console.log(response);
                    this.localStorage.setItem({name: "isLoggedIn", content: "yes"});
                    this.localStorage.setItem({name: "jwt", content: response.authenticatedUserJWT});
                    this.userDataRepository.loggedIn = true;
                    this.router.navigate(["/home/dashboard"]);
                },
                response => console.log(response.error.text),
            );
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required]],
        });
    }
}

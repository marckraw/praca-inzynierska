import { Component } from "@angular/core";

import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { LocalStorage } from "../services/localstorage.service";
import { UserDataRepository } from "../services/user-data.repository";
import { MyErrorStateMatcher } from "../shared/my-error-state-matcher";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"],
})
export class RegisterComponent {

    public formGroup: FormGroup;

    public matcher = new MyErrorStateMatcher();

    constructor(
        private userDataRepository: UserDataRepository,
        private formBuilder: FormBuilder,
    ) {}

    public ngOnInit() {
        this.createForm();
        this.userDataRepository.logout();
    }

    public register() {
        const user = this.formGroup.value;

        this.userDataRepository.register(user)
            .subscribe(
                () => console.log("Użytkownik utworzony!"),
                response => console.dir(response.error.text),
            );
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required]],
            firstName: ["", [Validators.required]],
            lastName: ["", [Validators.required]],
        });
    }
}

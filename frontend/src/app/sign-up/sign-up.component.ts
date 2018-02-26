import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors } from "@angular/forms";

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
            console.log(this.formGroup);
            this.isErrorMsgVisible = true;
        }
    }

    public areEqual(): ValidatorFn {
        return (group: FormGroup): ValidationErrors | null => {
            const areEqual = Object.entries(group.value)
                .map(value => value[1])
                .reduce((acc: boolean, actualValue: string, index: number, array: string[]) => {
                    acc = actualValue === array[index - 1];
                    return acc;
                }, false);

            return areEqual
                ? null
                : {
                      areEqual: {
                          equal: false,
                          errorMsg: "Hasła nie są takie same",
                      },
                  };
        };
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            login: ["", [Validators.required]],
            email: ["", [Validators.required]],
            passwordGroup: this.formBuilder.group(
                {
                    password: ["", [Validators.required]],
                    passwordConfirmation: ["", [Validators.required]],
                },
                { validator: this.areEqual() },
            ),
        });
    }
}



// passwordGroup: this.formBuilder.group(
//     {
//         password: [
//             '',
//             [
//                 this.validationService.isRequired(),
//                 this.validationService.customMinLength(4),
//                 this.validationService.customMaxLength(128),
//             ],
//         ],
//         passConfirmation: [
//             '',
//             [
//                 this.validationService.isRequired(),
//                 this.validationService.customMinLength(4),
//                 this.validationService.customMaxLength(128),
//             ],
//         ],
//     },
//     { validator: this.validationService.areEqual() },
// ),

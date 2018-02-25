import { Component, Inject, OnInit } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from "@angular/material";

@Component({
    selector: "app-generic-snackbar",
    template: `
        Dodane z sukcesem!
    `,
    styleUrls: ["./generic-snackbar.component.scss"],
})
export class GenericSnackbarComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
}

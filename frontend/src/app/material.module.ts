import { NgModule } from "@angular/core";
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
} from "@angular/material";

@NgModule({
    exports: [
        MatSidenavModule,
        MatSnackBarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatProgressSpinnerModule,
    ],
})
export class MaterialModule { }

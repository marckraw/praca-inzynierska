import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template:
    `
    <div class="main-nav-container">
        <a mat-raised-button color="primary" routerLink="/dashboard">Dashboard</a>
        <a mat-raised-button color="primary" routerLink="/adding-product">Add Product</a>
        <a mat-raised-button color="primary" routerLink="/show-products">Show Product</a>
        <a mat-raised-button color="secondary">Manage monthly fees</a>
        <a mat-raised-button color="secondary">Add Expense</a>
        <a mat-raised-button color="secondary">Add Revenue</a>
        <a mat-raised-button color="secondary">Manage Expenses</a>
        <a mat-raised-button color="secondary">Manage Revenues</a>
    </div>
    <router-outlet></router-outlet>
    `,
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    public title = "app";
}

import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template:
        `
    <div class="main-nav-container">
        <a mat-raised-button color="warn" routerLink="/dashboard">Dashboard</a>
        <a mat-raised-button color="primary" routerLink="/adding-product">Add Product</a>
        <a mat-raised-button color="accent" routerLink="/show-products">Manage Product</a>
        <a mat-raised-button color="secondary">Manage monthly fees</a>
        <a mat-raised-button color="primary" routerLink="/add-expense">Add Expense</a>
        <a mat-raised-button color="primary" routerLink="/add-income">Add Income</a>
        <a mat-raised-button color="accent" routerLink="/manage-expenses">Manage Expenses</a>
        <a mat-raised-button color="accent" routerLink="/manage-incomes">Manage Incomes</a>
    </div>
    <router-outlet></router-outlet>
    `,
    styleUrls: ["./app.component.scss"],
})
export class AppComponent { }

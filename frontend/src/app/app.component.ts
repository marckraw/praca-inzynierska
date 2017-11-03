import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template:
    `
    <div class="main-nav-container">
        <button class="cancel-btn" mat-raised-button color="primary" routerLink="/adding-products">Add Product</button>
        <button class="cancel-btn" mat-raised-button color="primary" routreLink="/show-products">Show Product</button>
    </div>
    <router-outlet></router-outlet>
    `,
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    public title = "app";
}

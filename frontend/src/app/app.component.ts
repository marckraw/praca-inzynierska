import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template:
    `
    <div class="main-nav-container">
        <a mat-raised-button color="primary" routerLink="/adding-product">Add Product</a>
        <a mat-raised-button color="primary" routerLink="/show-products">Show Product</a>
    </div>
    <router-outlet></router-outlet>
    `,
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    public title = "app";
}

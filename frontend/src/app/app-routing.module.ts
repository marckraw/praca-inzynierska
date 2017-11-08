import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddingProductComponent } from "./adding-product/adding-product.component";
import { DisplayProductsComponent } from "./display-products/display-products.component";

const appRoutes: Routes = [
    { path: "adding-product", component: AddingProductComponent },
    { path: "show-products", component: DisplayProductsComponent },
    { path: "",   redirectTo: "/adding-product", pathMatch: "full" },
    { path: "**", component: AddingProductComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        ),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {}

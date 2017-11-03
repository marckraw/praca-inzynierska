import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddingProductComponent } from "./adding-product/adding-product.component";

const appRoutes: Routes = [
    { path: "adding-product",        component: AddingProductComponent },
    { path: "",   redirectTo: "/adding-product", pathMatch: "full" },
    { path: "**", component: AddingProductComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }, // <-- debugging purposes only
        ),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule {}

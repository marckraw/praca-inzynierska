import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddExpenseComponent } from "./add-expense/add-expense.component";
import { AddRevenueComponent } from "./add-revenue/add-revenue.component";
import { ManageExpensesComponent } from "./manage-expenses/manage-expenses.component";
import { ManageRevenuesComponent } from "./manage-revenues/manage-revenues.component";

import { AddingProductComponent } from "./adding-product/adding-product.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DisplayProductsComponent } from "./display-products/display-products.component";

const appRoutes: Routes = [
    { path: "adding-product", component: AddingProductComponent },
    { path: "show-products", component: DisplayProductsComponent },
    { path: "add-expense", component: AddExpenseComponent },
    { path: "add-revenue", component: AddRevenueComponent },
    { path: "manage-expenses", component: ManageExpensesComponent },
    { path: "manage-revenues", component: ManageRevenuesComponent },
    { path: "dashboard", component: DashboardComponent },
    { path: "",   redirectTo: "/dashboard", pathMatch: "full" },
    { path: "**", component: DashboardComponent },
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

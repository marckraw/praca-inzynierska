import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddExpenseComponent } from "./add-expense/add-expense.component";
import { AddIncomeComponent } from "./add-income/add-income.component";
import { ManageExpensesComponent } from "./manage-expenses/manage-expenses.component";
import { ManageIncomesComponent } from "./manage-incomes/manage-incomes.component";

import { AddingProductComponent } from "./adding-product/adding-product.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DisplayProductsComponent } from "./display-products/display-products.component";

const appRoutes: Routes = [
    { path: "adding-product", component: AddingProductComponent },
    { path: "show-products", component: DisplayProductsComponent },
    { path: "add-expense", component: AddExpenseComponent },
    { path: "add-income", component: AddIncomeComponent },
    { path: "manage-expenses", component: ManageExpensesComponent },
    { path: "manage-incomes", component: ManageIncomesComponent },
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

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddExpenseComponent } from "./expenses/add-expense/add-expense.component";
import { ManageExpensesComponent } from "./expenses/manage-expenses/manage-expenses.component";
import { AddIncomeComponent } from "./incomes/add-income/add-income.component";
import { ManageIncomesComponent } from "./incomes/manage-incomes/manage-incomes.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddProductComponent } from "./products/add-product/add-product.component";
import { ManageProductsComponent } from "./products/manage-products/manage-products.component";

const appRoutes: Routes = [
    { path: "adding-product", component: AddProductComponent },
    { path: "show-products", component: ManageProductsComponent },
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

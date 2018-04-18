import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddBudgetComponent } from "./add-budget/add-budget.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddExpenseComponent } from "./expenses/add-expense/add-expense.component";
import { ManageExpensesComponent } from "./expenses/manage-expenses/manage-expenses.component";
import { AddIncomeComponent } from "./incomes/add-income/add-income.component";
import { ManageIncomesComponent } from "./incomes/manage-incomes/manage-incomes.component";
import { LoginComponent } from "./login/login.component";
import { ManageBudgetsComponent } from "./manage-budgets/manage-budgets.component";
import { ManageMonthlyFeesComponent } from "./manage-monthly-fees/manage-monthly-fees.component";
import { AddProductComponent } from "./products/add-product/add-product.component";
import { ManageProductsComponent } from "./products/manage-products/manage-products.component";
import { RegisterComponent } from "./register/register.component";

const appRoutes: Routes = [
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "add-product", component: AddProductComponent },
    { path: "add-expense", component: AddExpenseComponent },
    { path: "add-income", component: AddIncomeComponent },
    { path: "add-budget", component: AddBudgetComponent },
    { path: "manage-products", component: ManageProductsComponent },
    { path: "manage-expenses", component: ManageExpensesComponent },
    { path: "manage-incomes", component: ManageIncomesComponent },
    { path: "manage-budgets", component: ManageBudgetsComponent },
    { path: "manage-monthly-fees", component: ManageMonthlyFeesComponent },
    // { path: "dashboard", component: DashboardComponent },
    // { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
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

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from "ng2-charts";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConfirmationModalComponent } from "./confirmation-modal/confirmation-modal.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { AddExpenseComponent } from "./expenses/add-expense/add-expense.component";
import { EditExpenseComponent } from "./expenses/edit-expense/edit-expense.component";
import { ManageExpensesComponent } from "./expenses/manage-expenses/manage-expenses.component";

import { GenericEditComponent } from "./generic-edit/generic-edit.component";
import { GenericSnackbarComponent } from "./generic-snackbar/generic-snackbar.component";

import { AddIncomeComponent } from "./incomes/add-income/add-income.component";
import { EditIncomeComponent } from "./incomes/edit-income/edit-income.component";
import { ManageIncomesComponent } from "./incomes/manage-incomes/manage-incomes.component";

import { MaterialModule } from "./material.module";
import { CurrencyPlnPipe } from "./pipes/currency-pln.pipe";

import { AddProductComponent } from "./products/add-product/add-product.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";
import { ManageProductsComponent } from "./products/manage-products/manage-products.component";

import { AddBudgetComponent } from "./add-budget/add-budget.component";
import { ManageBudgetsComponent } from "./manage-budgets/manage-budgets.component";
import { ManageMonthlyFeesComponent } from "./manage-monthly-fees/manage-monthly-fees.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

import { BudgetService } from "./services/budget.service";
import { ExpenseService } from "./services/expense.service";
import { IncomeService } from "./services/income.service";
import { ProductService } from "./services/product.service";

import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./services/auth.guard";

import { LocalStorage } from "./services/localstorage.service";
import { UserDataRepository } from "./services/user-data.repository";

@NgModule({
    declarations: [
        AppComponent,
        AddProductComponent,
        ManageProductsComponent,
        DashboardComponent,
        CurrencyPlnPipe,
        AddExpenseComponent,
        AddIncomeComponent,
        ManageExpensesComponent,
        ManageIncomesComponent,
        ConfirmationModalComponent,
        GenericEditComponent,
        EditIncomeComponent,
        EditExpenseComponent,
        EditProductComponent,
        GenericSnackbarComponent,
        SidenavComponent,
        AddBudgetComponent,
        ManageBudgetsComponent,
        ManageMonthlyFeesComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        ChartsModule,
    ],
    providers: [
        ProductService,
        ExpenseService,
        IncomeService,
        BudgetService,
        LocalStorage,
        UserDataRepository,
        AuthGuard,
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        ConfirmationModalComponent,
        GenericEditComponent,
        GenericSnackbarComponent,
        EditIncomeComponent,
        EditExpenseComponent,
        EditProductComponent,
    ],
})
export class AppModule { }

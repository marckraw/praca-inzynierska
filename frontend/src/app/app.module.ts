import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from "ng2-charts";

import { AddExpenseComponent } from "./add-expense/add-expense.component";
import { AddIncomeComponent } from "./add-income/add-income.component";
import { AddingProductComponent } from "./adding-product/adding-product.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConfirmationModalComponent } from "./confirmation-modal/confirmation-modal.component";
import { CurrencyPlnPipe } from "./currency-pln.pipe";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DisplayProductsComponent } from "./display-products/display-products.component";
import { GenericEditComponent } from "./generic-edit/generic-edit.component";
import { ManageExpensesComponent } from "./manage-expenses/manage-expenses.component";
import { ManageIncomesComponent } from "./manage-incomes/manage-incomes.component";
import { MaterialModule } from "./material.module";
import { ExpenseService } from "./services/expense.service";
import { IncomeService } from "./services/income.service";
import { ProductService } from "./services/product.service";

@NgModule({
    declarations: [
        AppComponent,
        AddingProductComponent,
        DisplayProductsComponent,
        DashboardComponent,
        CurrencyPlnPipe,
        AddExpenseComponent,
        AddIncomeComponent,
        ManageExpensesComponent,
        ManageIncomesComponent,
        ConfirmationModalComponent,
        GenericEditComponent,
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
    providers: [ProductService, ExpenseService, IncomeService],
    bootstrap: [AppComponent],
    entryComponents: [ConfirmationModalComponent, GenericEditComponent],
})
export class AppModule { }

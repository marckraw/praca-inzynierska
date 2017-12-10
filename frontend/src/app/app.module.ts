import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

import { AddExpenseComponent } from "./add-expense/add-expense.component";
import { AddRevenueComponent } from "./add-revenue/add-revenue.component";
import { AddingProductComponent } from "./adding-product/adding-product.component";
import { AppComponent } from "./app.component";
import { ConfirmationModalComponent } from "./confirmationmodal/confirmationmodal.component";
import { CurrencyPlnPipe } from "./currency-pln.pipe";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DisplayProductsComponent } from "./display-products/display-products.component";
import { ManageExpensesComponent } from "./manage-expenses/manage-expenses.component";
import { ManageRevenuesComponent } from "./manage-revenues/manage-revenues.component";
import { MaterialModule } from "./material.module";
import { ProductService } from "./product.service";

@NgModule({
    declarations: [
        AppComponent,
        AddingProductComponent,
        DisplayProductsComponent,
        DashboardComponent,
        CurrencyPlnPipe,
        AddExpenseComponent,
        AddRevenueComponent,
        ManageExpensesComponent,
        ManageRevenuesComponent,
        ConfirmationModalComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
    ],
    providers: [ ProductService ],
    bootstrap: [ AppComponent ],
    entryComponents: [ ConfirmationModalComponent ],
})
export class AppModule { }

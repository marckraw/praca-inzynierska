import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AddingProductComponent } from "./adding-product/adding-product.component";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { ProductService } from "./product.service";

@NgModule({
    declarations: [
        AppComponent,
        AddingProductComponent,
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
    bootstrap: [AppComponent],
})
export class AppModule { }

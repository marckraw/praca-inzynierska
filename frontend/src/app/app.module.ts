import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddingProductComponent } from './adding-product/adding-product.component';
import { ProductService } from './product.service';

@NgModule({
    declarations: [
        AppComponent,
        AddingProductComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [ ProductService ],
    bootstrap: [AppComponent]
})
export class AppModule { }

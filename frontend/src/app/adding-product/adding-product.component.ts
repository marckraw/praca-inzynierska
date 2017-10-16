import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
  selector: 'pi-adding-product',
  templateUrl: './adding-product.component.html',
  styleUrls: ['./adding-product.component.scss']
})
export class AddingProductComponent {
    public formGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private product: ProductService
    ) {
        this.createForm();
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
            productName: [''],
            productPrice: [''],
            productCompanyName: ['']
        });
    }

    public add(product: Product) {
        this.product.addProduct(product)
        .subscribe(
            (data) => console.log(data)
        );
    }


}

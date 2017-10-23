import { Component } from '@angular/core/';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../models/product';

@Component({
    selector: 'pi-adding-product',
    template: `
        <div class="adding-products-container" [formGroup]="formGroup">
            <div class='form-group'>
                <label>
                    <span>Product name</span>
                    <input
                        class='form-control'
                        type="text"
                        [formControlName]="'productName'">
                </label>
                <label>
                    <span>Product company name</span>
                    <input
                        class='form-control'
                        type="text"
                        [formControlName]="'productCompanyName'">
                </label>
                <label>
                    <span>Product price</span>
                    <input
                        class='form-control'
                        type="number"
                        [formControlName]="'productPrice'">
                </label>
                <button (click)="add(formGroup.value)">Add</button>
            </div>
        </div>
`,
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
    this.product.addProduct(product).subscribe(data => console.log(data));
  }
}

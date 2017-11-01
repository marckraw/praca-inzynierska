import { Component } from "@angular/core/";
import { FormBuilder, FormGroup } from "@angular/forms";

import { Product } from "../models/product";
import { ProductService } from "../product.service";
import { MaterialModule } from "./../material.module";

@Component({
    selector: "pi-adding-product",
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
                <button mat-raised-button (click)="add(formGroup.value)">Add</button>
                <button mat-raised-button color="primary">Primary</button>
                <button mat-raised-button (click)="sendRequest()">Send</button>
            </div>
        </div>
`,
  styleUrls: ["./adding-product.component.scss"],
})
export class AddingProductComponent {
  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private product: ProductService,
  ) {
    this.createForm();
  }

    public add(product: Product) {
       this.product.addProduct(product).subscribe( (data) => console.log(data));
    }

    public sendRequest() {
        this.product.showProducts().subscribe( (data) => console.dir(data));
    }

    private createForm() {
        this.formGroup = this.formBuilder.group({
          productName: [""],
          productPrice: [""],
          productCompanyName: [""],
        });
      }
}

import { HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "./../services/product.service";

import { HttpClient } from "@angular/common/http";
import { DebugElement } from "@angular/core";
import { AddProductComponent } from "./add-product.component";

describe("AddingProductComponent", () => {
    let component: AddProductComponent;
    let fixture: ComponentFixture<AddProductComponent>;
    let element: HTMLElement;
    let debugEl: DebugElement;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                ],
                declarations: [
                    AddProductComponent,
                ],
                providers: [
                    ProductService,
                    HttpClient,
                ],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AddProductComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;

        fixture.detectChanges();
    });

    describe("Initial display", () => {
        it("should create", () => {
            expect(component).toBeTruthy();
        });
    });
});

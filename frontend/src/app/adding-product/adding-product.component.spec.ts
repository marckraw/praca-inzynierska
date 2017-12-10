import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "./../product.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddingProductComponent } from "./adding-product.component";
import { DebugElement } from "@angular/core";
import { HttpClient } from "@angular/common/http";

describe("AddingProductComponent", () => {
    let component: AddingProductComponent;
    let fixture: ComponentFixture<AddingProductComponent>;
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
                    AddingProductComponent,
                ],
                providers: [
                    ProductService,
                    HttpClient,
                ],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(AddingProductComponent);
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

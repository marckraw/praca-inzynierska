import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingProductComponent } from './adding-product.component';

describe('AddingProductComponent', () => {
  let component: AddingProductComponent;
  let fixture: ComponentFixture<AddingProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManageRevenuesComponent } from "./manage-revenues.component";

describe("ManageRevenuesComponent", () => {
  let component: ManageRevenuesComponent;
  let fixture: ComponentFixture<ManageRevenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRevenuesComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRevenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

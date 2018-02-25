import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManageIncomesComponent } from "./manage-incomes.component";

describe("ManageIncomesComponent", () => {
  let component: ManageIncomesComponent;
  let fixture: ComponentFixture<ManageIncomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageIncomesComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageIncomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

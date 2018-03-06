import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManageMonthlyFeesComponent } from "./manage-monthly-fees.component";

describe("ManageMonthlyFeesComponent", () => {
    let component: ManageMonthlyFeesComponent;
    let fixture: ComponentFixture<ManageMonthlyFeesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ManageMonthlyFeesComponent ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManageMonthlyFeesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

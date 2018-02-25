import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ManageBudgetsComponent } from "./manage-budgets.component";

describe("ManageBudgetsComponent", () => {
    let component: ManageBudgetsComponent;
    let fixture: ComponentFixture<ManageBudgetsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ManageBudgetsComponent ],
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManageBudgetsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});

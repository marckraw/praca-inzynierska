import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericSnackbarComponent } from './generic-snackbar.component';

describe('GenericSnackbarComponent', () => {
  let component: GenericSnackbarComponent;
  let fixture: ComponentFixture<GenericSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

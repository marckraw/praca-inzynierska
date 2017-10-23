import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddingProductComponent } from './adding-product/adding-product.component';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
        ],
        declarations: [
            AppComponent,
            AddingProductComponent
        ],
        providers: [
            ProductService,
            HttpClient,
        ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

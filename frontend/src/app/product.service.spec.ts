import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [ProductService, HttpClient]
        });
    });

    it('should be created', inject([ProductService], (service: ProductService) => {
        expect(service).toBeTruthy();
    }));
});

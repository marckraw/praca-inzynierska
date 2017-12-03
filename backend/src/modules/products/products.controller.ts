import { AddProduct } from "./dto/add-product.dto";
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Observable } from "rxjs/Observable";

@Controller("products")
export class ProductsController {
    constructor() {}

    @Post("add")
    addProduct(@Body() addProduct: AddProduct) {
        console.log(addProduct);
        return addProduct;
    }

    @Get("add")
    addProduct2(): Observable<any> {
        return Observable.of({
            dupa: 1,
            dupa2: 2,
        })
    }

    @Get()
    findAll(): Observable<any> {
        return Observable.of({
            dupa: 1,
            dupa2: 2,
        })
    }
}

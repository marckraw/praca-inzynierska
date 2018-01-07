import { Body, Controller, Get, Param, Post } from "@nestjs/common";

// services
import { ProductsService } from "./products.service";

// interfaces
import { IProduct } from "./interfaces/product.interface";

// dto
import { AddProductDto } from "./dto/add-product.dto";

@Controller("products")
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Post("add")
    async addProduct( @Body() addProductDto: AddProductDto) {
        console.log(addProductDto);
        return this.productService.addProduct(addProductDto);
    }

    @Get()
    async findAll(): Promise<IProduct[]> {
        return this.productService.findAll();
    }
}

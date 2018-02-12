import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

// services
import { ProductsService } from "./products.service";

// interfaces
import { IProduct } from "./interfaces/product.interface";

// dto
import { AddProductDto } from "./dto/add-product.dto";
import { RemoveProductDto } from "./dto/remove-product.dto";

@Controller("products")
export class ProductsController {
    constructor(private productService: ProductsService) { }

    @Post("add")
    async addProduct( @Body() addProductDto: AddProductDto) {
        console.log(addProductDto);
        return this.productService.addProduct(addProductDto);
    }

    @Delete("remove")
    async removeProduct( @Body() removeProductDto: RemoveProductDto) {
        console.log("From backend controller", removeProductDto);
        this.productService.removeById(removeProductDto);
    }

    @Get()
    async findAll(): Promise<IProduct[]> {
        return this.productService.findAll();
    }
}

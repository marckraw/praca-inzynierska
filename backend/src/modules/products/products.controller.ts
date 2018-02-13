import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

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
        return this.productService.addProduct(addProductDto);
    }

    @Delete("remove")
    async removeProduct( @Body() removeProductDto: RemoveProductDto) {
        this.productService.removeById(removeProductDto);
    }

    @Put("update")
    async updateProduct( @Body() removeProductDto: RemoveProductDto) {
        this.productService.updateById(removeProductDto);
    }

    @Get()
    async findAll(): Promise<IProduct[]> {
        return this.productService.findAll();
    }
}

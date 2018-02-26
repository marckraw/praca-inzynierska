import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

// services
import { ProductsService } from "./products.service";

// interfaces
import { IProduct } from "./interfaces/product.interface";

// dto
import { AddProductDto } from "./dto/add-product.dto";
import { EditProductDto } from "./dto/edit-product.dto";
import { RemoveProductDto } from "./dto/remove-product.dto";

@Controller("products")
export class ProductsController {
    constructor(private productsService: ProductsService) { }

    @Post("add")
    async addProduct( @Body() addProductDto: AddProductDto) {
        return this.productsService.addProduct(addProductDto);
    }

    @Delete("remove")
    async removeProduct( @Body() removeProductDto: RemoveProductDto) {
        this.productsService.removeById(removeProductDto);
    }

    @Put("edit")
    async editProduct( @Body() editProductDto: EditProductDto) {
        this.productsService.editProduct(editProductDto);
    }

    // @Get(":id")
    // async findById(id: number) {
    //     // implement findById
    // }

    @Get()
    async findAll(): Promise<IProduct[]> {
        return this.productsService.findAll();
    }
}

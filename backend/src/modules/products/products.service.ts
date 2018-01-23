import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Observable } from "rxjs/Observable";

// interfaces
import { IProduct } from "./interfaces/product.interface";

// dto
import { AddProductDto } from "./dto/add-product.dto";
import { RemoveProductDto } from "./dto/remove-product.dto";

@Component()
export class ProductsService {
    constructor(
        @Inject("ProductModelToken") private readonly productModel: Model<IProduct>,
    ) { }

    async addProduct(addProductDto: AddProductDto): Promise<IProduct> {
        const addedProduct = new this.productModel(addProductDto);
        return await addedProduct.save();
    }

    async findAll(): Promise<IProduct[]> {
        return this.productModel.find().exec();
    }

    async removeById(removeProductDto: RemoveProductDto): Promise<IProduct> {
        console.log("Remove from backend servie");
        return this.productModel.findByIdAndRemove(removeProductDto._id).exec();
    }
}

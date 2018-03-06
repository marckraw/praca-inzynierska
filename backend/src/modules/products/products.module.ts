import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";

import { ProductsController } from "./products.controller";
import { productsProviders } from "./products.providers";
import { ProductsService } from "./products.service";

@Module({
    modules: [DatabaseModule],
    controllers: [ProductsController],
    components: [
        ProductsService,
        ...productsProviders,
    ],
})
export class ProductsModule { }

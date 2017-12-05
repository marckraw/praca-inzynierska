import { Module } from "@nestjs/common";

import { ProductsService } from "./products.service";
import { productsProviders } from "./products.providers";
import { ProductsController } from "./products.controller";
import { DatabaseModule } from "../database/database.module";

@Module({
    modules: [DatabaseModule],
    controllers: [ProductsController],
    components: [
        ProductsService,
        ...productsProviders
    ],
})
export class ProductsModule {}

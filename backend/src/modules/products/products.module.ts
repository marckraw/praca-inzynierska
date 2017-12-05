import { ProductsController } from "./products.controller";
import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";

@Module({
    modules: [DatabaseModule],
    controllers: [ProductsController],
    components: [],
})
export class ProductsModule {}

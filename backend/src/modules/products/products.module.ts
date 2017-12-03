import { CorsMiddleware } from "./../middleware/cors.middleware";
import { ProductsController } from "./products.controller";
import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";

@Module({
    modules: [DatabaseModule],
    controllers: [ProductsController],
    components: [],
})
// export class ProductsModule {}
export class ProductsModule {}

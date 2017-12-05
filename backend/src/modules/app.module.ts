import { LoggerMiddleware } from "./middleware/logger.middleware";
import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { ProductsModule } from "./products/products.module";

@Module({
    modules: [ProductsModule],
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(
            { path: '/products', method: RequestMethod.ALL },
            { path: '/products/add', method: RequestMethod.ALL },
        );
    }
}

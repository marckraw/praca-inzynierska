import { LoggerMiddleware } from "./middleware/logger.middleware";
import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

import { ProductsModule } from "./products/products.module";
import { RevenuesModule } from "./revenues/revenues.module";
import { ExpensesModule } from "./expenses/expenses.module";

@Module({
    modules: [
        ProductsModule,
        RevenuesModule,
        ExpensesModule,
    ],
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(
            { path: '/products', method: RequestMethod.ALL },
            { path: '/products/add', method: RequestMethod.ALL },
        );
    }
}

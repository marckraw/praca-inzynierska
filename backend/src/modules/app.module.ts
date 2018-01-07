import { MiddlewaresConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { LoggerMiddleware } from "./middleware/logger.middleware";

import { ExpensesModule } from "./expenses/expenses.module";
import { IncomesModule } from "./incomes/incomes.module";
import { ProductsModule } from "./products/products.module";
import { RevenuesModule } from "./revenues/revenues.module";

import { AppController } from "./app.controller";

@Module({
    controllers: [AppController],
    modules: [
        ProductsModule,
        RevenuesModule,
        ExpensesModule,
        IncomesModule,
    ],
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer.apply(LoggerMiddleware).forRoutes(
            { path: "/products", method: RequestMethod.ALL },
            { path: "/products/add", method: RequestMethod.ALL },
            { path: "/incomes", method: RequestMethod.ALL },
            { path: "/incomes/add", method: RequestMethod.ALL },
        );
    }
}

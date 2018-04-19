import { MiddlewaresConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { dupaMiddleware } from "./middleware/dupa.middleware";
import { LoggerMiddleware } from "./middleware/logger.middleware";

import { BudgetsModule } from "./budgets/budgets.module";
import { ExpensesModule } from "./expenses/expenses.module";
import { IncomesModule } from "./incomes/incomes.module";
import { ProductsModule } from "./products/products.module";
import { UsersModule } from "./users/users.module";

import { AppController } from "./app.controller";
import { UsersService } from "./users/users.service";

@Module({
    controllers: [AppController],
    modules: [
        BudgetsModule,
        ProductsModule,
        ExpensesModule,
        IncomesModule,
        UsersModule,
    ],
})
export class ApplicationModule implements NestModule {
    configure(consumer: MiddlewaresConsumer): void {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes(
                { path: "/products", method: RequestMethod.ALL },
                { path: "/products/add", method: RequestMethod.ALL },
                { path: "/incomes", method: RequestMethod.ALL },
                { path: "/incomes/add", method: RequestMethod.ALL },
            );
        consumer
            .apply(dupaMiddleware)
            .forRoutes(
                { path: "/products", method: RequestMethod.ALL },
            );
    }
}

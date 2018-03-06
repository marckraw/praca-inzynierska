import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";

import { ExpensesController } from "./expenses.controller";
import { expensesProviders } from "./expenses.providers";
import { ExpensesService } from "./expenses.service";

@Module({
    modules: [DatabaseModule],
    controllers: [ExpensesController],
    components: [
        ExpensesService,
        ...expensesProviders,
    ],
})
export class ExpensesModule {}

import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";

import { ExpensesController } from "./expenses.controller";

@Module({
    modules: [DatabaseModule],
    controllers: [ExpensesController],
    components: [],
})
export class ExpensesModule {}

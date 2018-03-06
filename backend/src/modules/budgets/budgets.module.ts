import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";

import { BudgetsController } from "./budgets.controller";
import { budgetsProviders } from "./budgets.providers";
import { BudgetsService } from "./budgets.service";

@Module({
    modules: [DatabaseModule],
    controllers: [BudgetsController],
    components: [
        BudgetsService,
        ...budgetsProviders,
    ],
})
export class BudgetsModule {}

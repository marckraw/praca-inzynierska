import { MiddlewaresConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";

import * as passport from "passport";

import { DatabaseModule } from "../database/database.module";

import { IncomesController } from "./incomes.controller";
import { incomesProviders } from "./incomes.providers";
import { IncomesService } from "./incomes.service";

@Module({
    modules: [DatabaseModule],
    controllers: [IncomesController],
    components: [
        IncomesService,
        ...incomesProviders,
    ],
})
export class IncomesModule {}

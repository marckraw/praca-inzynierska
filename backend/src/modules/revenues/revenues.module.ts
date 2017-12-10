import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";

import { RevenuesController } from "./revenues.controller";


@Module({
    modules: [DatabaseModule],
    controllers: [RevenuesController],
    components: [],
})
export class RevenuesModule {}

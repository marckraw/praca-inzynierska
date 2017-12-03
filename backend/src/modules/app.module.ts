import { TestController } from "./test.controller";
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
    modules: [],
    controllers: [AppController, TestController],
    components: [],
})
export class ApplicationModule {}

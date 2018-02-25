import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as session from "express-session";

import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./modules/app.module";

function addMiddleware(instance): void {
    instance.use(bodyParser.json());
    instance.use(session({
        secret: "work hard",
        resave: true,
        saveUnitialized: false,
    }));
    instance.use(cors());
}

function setUpExpress(): void {
    const instance = express();
    addMiddleware(instance);
    return instance;
}

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule, setUpExpress());
    await app.listen(8080);
}
bootstrap();

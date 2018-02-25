import { Middleware } from "@nestjs/common";

@Middleware()
export class LoggerMiddleware {
    resolve(...args) {
        return (req, res, next) => {
            next();
        };
    }
}

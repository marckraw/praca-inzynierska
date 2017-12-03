import { Middleware, NestMiddleware, ExpressMiddleware } from '@nestjs/common';
import * as cors from "cors";

@Middleware()
export class CorsMiddleware implements NestMiddleware {
    public options;

    constructor() {
        this.options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "http://localhost:3000",
            preflightContinue: true
        };
    }
    resolve(): ExpressMiddleware {
        return (req, res, next) => {
            console.log("cors middleware");
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            cors(this.options);
            next();
        };
    }
}




// this.options = {
//     allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
//     credentials: true,
//     methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//     origin: "http://localhost:3000",
//     preflightContinue: true
// };


// this.express.use(cors(this.options))

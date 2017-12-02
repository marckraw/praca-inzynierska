import * as path from 'path';
import * as express from 'express';
import * as mongodb from 'mongodb';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from "cors";

import HeroRouter from './routes/HeroRouter';
import ProductRouter from './routes/ProductRouter';
import DatabaseTestRouter from './routes/DatabaseTestRouter';

// Creates and configures an ExpressJS web server.
class App {

    public client = mongodb.MongoClient;
    public mongoUri = "mongodb://mongo/dummy-app";

    // ref to Express instance
    public express: express.Application;

    private options: cors.CorsOptions;

    //Run configuration methods on the Express instance.
    constructor() {
        // options for cors middleware
        this.options = {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "http://localhost:3000",
            preflightContinue: true
        };

        this.express = express();
        this.middleware();
        this.routes();
    }


    // Configure Express middleware.
    private middleware(): void {
        this.express.use(cors(this.options))
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
        * working so far. This function will change when we start to add more
        * API endpoints */
        let router = express.Router();

        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });

        // testowe mongodb, pozniej przezuce do innych klas
        router.get("/data/from/db", (req, res, next) => {
            this.client.connect(this.mongoUri, (err, db) => {
                if (err) return next(err);

                let collection = db.collection('dummy');
                collection.find({}).toArray( (err, docs) => {
                    if (err) return next(err);
                    return res.json(docs);
                })
            })
        })

        router.post("/data/into/db", (req, res, next) => {
            this.client.connect(this.mongoUri, (err, db) => {
                if (err) return next(err);

                let collection = db.collection("dummy");
                collection.insertMany(req.body, (err, result) => {
                    return res.json({result: "success"});
                })
            })
        })

        this.express.use('/', router);
        this.express.use('/api/v1/heroes', HeroRouter);
        this.express.use('/api/product', ProductRouter);
        this.express.use('/api/database/test/', DatabaseTestRouter);

        router.options("*", cors(this.options));
    }

}

export default new App().express;

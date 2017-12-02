import { IProduct } from "./../models/product";
import {Router, Request, Response, NextFunction} from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as mongodb from 'mongodb';

import { Product } from "../models/fakeProduct";

const Products = require('../product.json');


export class DatabaseTestRouter {
    public router: Router;
    public mongoUri: string;

    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = Router();
        this.mongoUri = "mongodb://mongo/dummy-app";
        this.init();
    }

    public getAllData(req: Request, res: Response, next: NextFunction) {
        mongodb.MongoClient.connect(this.mongoUri, (err, db) => {
            if (err) return next(err);

            let collection = db.collection("dummy");

            return res.json(collection.find({}));
        })
    }

    public addDummyData(req: Request, res: Response, next: NextFunction) {
        mongodb.MongoClient.connect(this.mongoUri, (err, db) => {
            if (err) return next(err);

            let collection = db.collection("dummy");
            collection.insertMany(req.body, (err, result) => {
                return res.json({result: "success"});
            })
        })
    }

    // testowe mongodb, pozniej przezuce do innych klas
    // router.get("/data/from/db", (req, res, next) => {
    //     this.client.connect(this.mongoUri, (err, db) => {
    //         if (err) return next(err);

    //         let collection = db.collection("dummy");
    //         collection.find({}).toArray( (err, docs) => {
    //             if (err) return next(err);
    //             return res.json(docs);
    //         })
    //     })
    // })

    // router.post("/data/into/db", (req, res, next) => {
    //     this.client.connect(this.mongoUri, (err, db) => {
    //         if (err) return next(err);

    //         let collection = db.collection("dummy");
    //         collection.insertMany(req.body, (err, result) => {
    //             return res.json({result: "success"});
    //         })
    //     })
    // })


    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAllData);
        this.router.post('/addData', this.addDummyData);
    }

}

// Create the HeroRouter, and export its configured Express.Router
const databaseRouter = new DatabaseTestRouter();
databaseRouter.init();

export default databaseRouter.router;

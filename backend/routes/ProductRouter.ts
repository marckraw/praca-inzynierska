import { IProduct } from "./../models/product";
import {Router, Request, Response, NextFunction} from 'express';
import * as path from 'path';
import * as fs from 'fs';

import { Product } from "../models/fakeProduct";

const Products = require('../product.json');


export class HeroRouter {
    router: Router

    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = Router();
        this.init();

    }

    /**
     * GET all Heroes.
     */
    public getAll(req: Request, res: Response, next: NextFunction) {
        // let Products2 = {};

        res.send(Products);
    }


    /**
     * GET one hero by id
     */
    public getOne(req: Request, res: Response, next: NextFunction) {
        let query = parseInt(req.params.id);
        let hero = Products.find(hero => hero.id === query);
        if (hero) {
            res.status(200)
                .send({
                    message: 'Success',
                    status: res.status,
                    hero
                });
        }
        else {
        res.status(404)
            .send({
                message: 'No hero found with the given id.',
                status: res.status
            });
        }
    }

    /**
     * POST Add Product.
     */
    public addProduct(req: Request, res: Response) {
        if(req) {

            const product: IProduct = {
                id: Products[Products.length - 1].id + 1,
                name: req.body.productName,
                company: req.body.productCompanyName,
                image: req.body.productImage,
                price: req.body.productPrice,
                weight: req.body.productWeight,
                category: req.body.productCategory,
                quantitativeType: req.body.productQuantitativeType,
                tags: req.body.productTags,
            }

            let ProductsTemp = Products;

            ProductsTemp.push(product);

            fs.writeFile("product.json", JSON.stringify(ProductsTemp), (err) => {
                if (err)  {
                    res.send({
                        message: "Nie udało się dodac do bazy danych",
                    })
                } else {
                    res.send({
                        message: "Dodano do bazy danych",
                        products: ProductsTemp,
                    })
                }
            });
        }
    }

    /**
     * POST Remove Product.
     */
    public removeProduct(req: Request, res: Response) {
        if(req) {
            let productId = req.body.id;
            let ProductsTemp = Products
                .filter( (product) => {
                    return product.id !== productId;
                });

            fs.writeFile("product.json", JSON.stringify(ProductsTemp), (err) => {
                if (err)  {
                    res.send({
                        message: "Nie udało się usunac z bazy danych",
                    })
                } else {
                    res.send({
                        message: "Removed from database",
                        products: ProductsTemp,
                    })
                }
            });
        }
    }

    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
        this.router.post('/add', this.addProduct);
        this.router.post('/remove', this.removeProduct);
    }

}

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes = new HeroRouter();
heroRoutes.init();

export default heroRoutes.router;

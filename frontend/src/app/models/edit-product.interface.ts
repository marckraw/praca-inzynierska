import { IProduct } from "./product.interface";

export interface IEditProduct {
    confirmed: boolean;
    product: IProduct;
}

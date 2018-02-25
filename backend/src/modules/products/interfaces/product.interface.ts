import { Document } from "mongoose";

export interface IProduct extends Document {
    readonly productName: string;
    readonly productCompanyName: string;
    readonly productImage: string;
    readonly productPrice: number;
    readonly productWeight: string;
    readonly productCategory: string;
    readonly productQuantitativeType: string;
    readonly productTags: string[];
}

import * as mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema({
    productName: String,
    productCompanyName: String,
    productImage: String,
    productPrice: Number,
    productWeight: String,
    productCategory: String,
    productQuantitativeType: String,
    productTags: Array,
})

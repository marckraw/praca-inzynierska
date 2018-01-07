import * as mongoose from "mongoose";

export const IncomeSchema = new mongoose.Schema({
    name: String,
    productCompanyName: String,
    when: String,
    paymentMethod: String,
    value: Number,
});

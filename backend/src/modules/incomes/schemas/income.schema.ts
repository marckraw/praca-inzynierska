import * as mongoose from "mongoose";

export const IncomeSchema = new mongoose.Schema({
    name: String,
    when: String,
    paymentMethod: String,
    value: Number,
    userId: String,
});

/*

schema types:
String, Number, Date, Buffer, Boolean, Mixed (any?), ObjectId, Array

*/

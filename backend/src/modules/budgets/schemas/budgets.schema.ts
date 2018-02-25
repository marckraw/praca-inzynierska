import * as mongoose from "mongoose";

export const BudgetsSchema = new mongoose.Schema({
    name: String,
    startDate: String,
    endDate: String,
    categories: [
        {
            id: Number,
            name: String,
            declaredAmount: Number,
            enteredAmount: Number,
        },
    ],
});

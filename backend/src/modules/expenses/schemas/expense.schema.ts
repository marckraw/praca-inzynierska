import * as mongoose from "mongoose";

export const ExpenseSchema = new mongoose.Schema({
    name: String,
    where: String,
    when: String,
    qt: Number,
    paymentMethod: String,
    cost: Number,
    totalCost: Number,
    expenseCategory: String,
    choosedBudget: String,
    choosedBudgetCategory: String,
    userId: String,
});

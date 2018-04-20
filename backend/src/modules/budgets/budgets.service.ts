import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Observable } from "rxjs/Observable";

// interfaces
import { IBudget } from "./interfaces/budget.interface";

// dto
import { AddBudgetDto } from "./dto/add-budget.dto";
// import { RemoveExpenseDto } from "./dto/remove-expense.dto";

@Component()
export class BudgetsService {
    constructor(
        @Inject("BudgetsModelToken") private readonly budgetsModel: Model<IBudget>,
    ) {}

    async addBudget(addBudgetDto: AddBudgetDto): Promise<IBudget> {
        const addedBudget = new this.budgetsModel(addBudgetDto);
        return await addedBudget.save();
    }

    async getBudgets(userId): Promise<IBudget[]> {
        return this.budgetsModel.find({userId}).exec();
    }

    async getAllBudgets(): Promise<IBudget[]> {
        return this.budgetsModel.find().exec();
    }

    // async addExpense(addExpenseDto: AddExpenseDto): Promise<IExpense> {
    //     const addedExpense = new this.expenseModel(addExpenseDto);
    //     return await addedExpense.save();
    // }

    // async removeById(removeExpenseDto: RemoveExpenseDto): Promise<IExpense> {
    //     return this.expenseModel.findByIdAndRemove(removeExpenseDto._id).exec();
    // }
}

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
        // @Inject("ExpenseModelToken") private readonly budgetsModel: Model<IExpense>,
        @Inject("BudgetsModelToken") private readonly budgetsModel: Model<IBudget>,
    ) {}

    async addBudget(addBudgetDto: AddBudgetDto): Promise<IBudget> {
        console.log(addBudgetDto);
        const addedBudget = new this.budgetsModel(addBudgetDto);
        return await addedBudget.save();
    }

    // async addExpense(addExpenseDto: AddExpenseDto): Promise<IExpense> {
    //     const addedExpense = new this.expenseModel(addExpenseDto);
    //     return await addedExpense.save();
    // }

    // async getAllExpenses(): Promise<IExpense[]> {
    //     return this.expenseModel.find().exec();
    // }

    // async removeById(removeExpenseDto: RemoveExpenseDto): Promise<IExpense> {
    //     return this.expenseModel.findByIdAndRemove(removeExpenseDto._id).exec();
    // }
}

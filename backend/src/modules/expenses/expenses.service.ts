import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Observable } from "rxjs/Observable";

// interfaces
import { IExpense } from "./interfaces/expense.interface";

// dto
import { AddExpenseDto } from "./dto/add-expense.dto";
import { RemoveExpenseDto } from "./dto/remove-expense.dto";
import { EditExpenseDto } from "./dto/edit-expense.dto";

@Component()
export class ExpensesService {
    constructor(
        @Inject("ExpenseModelToken") private readonly expenseModel: Model<IExpense>,
    ) {}

    async addExpense(addExpenseDto: AddExpenseDto): Promise<IExpense> {
        const addedExpense = new this.expenseModel(addExpenseDto);
        return await addedExpense.save();
    }

    async editExpense(editExpenseDto: EditExpenseDto) {
        const id = editExpenseDto._id;

        return await this.expenseModel.findByIdAndUpdate(id, editExpenseDto);
    }

    async getAllExpenses(): Promise<IExpense[]> {
        return this.expenseModel.find().exec();
    }

    async removeById(removeExpenseDto: RemoveExpenseDto): Promise<IExpense> {
        return this.expenseModel.findByIdAndRemove(removeExpenseDto._id).exec();
    }
}

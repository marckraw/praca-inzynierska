import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Observable } from "rxjs/Observable";

// interfaces
import { IExpense } from "./interfaces/expense.interface";

// dto
import { AddExpenseDto } from "./dto/add-expense.dto";


@Component()
export class ExpensesService {
    constructor(
        @Inject('ExpenseModelToken') private readonly expenseModel: Model<IExpense>
    ) {}

    async addExpense(addExpenseDto: AddExpenseDto): Promise<IExpense> {
        const addedExpense = new this.expenseModel(addExpenseDto);
        return await addedExpense.save();
    }

    async getAllExpenses(): Promise<IExpense[]> {
        return this.expenseModel.find().exec();
    }
}

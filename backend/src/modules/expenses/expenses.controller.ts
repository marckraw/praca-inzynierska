import { IExpense } from "./interfaces/expense.interface";
import { AddExpenseDto } from "./dto/add-expense.dto";
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { ExpensesService } from "./expenses.service";

@Controller("expenses")
export class ExpensesController {
    constructor(private expenseService: ExpensesService) {}

    @Post("add")
    async addExpense(@Body() addExpenseDto: AddExpenseDto) {
        return this.expenseService.addExpense(addExpenseDto);
    }

    @Get()
    async getAllExpenses(): Promise<IExpense[]> {
        return this.expenseService.getAllExpenses();
    }
}

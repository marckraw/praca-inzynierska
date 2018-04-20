import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { ExpensesService } from "./expenses.service";

import { IExpense } from "./interfaces/expense.interface";

import { AddExpenseDto } from "./dto/add-expense.dto";
import { EditExpenseDto } from "./dto/edit-expense.dto";
import { RemoveExpenseDto } from "./dto/remove-expense.dto";

@Controller("expenses")
export class ExpensesController {
    constructor(private expenseService: ExpensesService) {}

    @Post("add")
    async addExpense(@Body() addExpenseDto: AddExpenseDto) {
        return this.expenseService.addExpense(addExpenseDto);
    }

    @Put("edit")
    async editExpense( @Body() editExpenseDto: EditExpenseDto) {
        return this.expenseService.editExpense(editExpenseDto);
    }

    @Delete("remove")
    async removeExpense( @Body() removeExpenseDto: RemoveExpenseDto) {
        return this.expenseService.removeById(removeExpenseDto);
    }

    @Get(":id")
    async getExpenses(@Param() params): Promise<IExpense[]> {
        return this.expenseService.getExpenses(params.id);
    }

    @Get()
    async getAllExpenses(): Promise<IExpense[]> {
        return this.expenseService.getAllExpenses();
    }
}

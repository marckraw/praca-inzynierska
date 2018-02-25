import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

import { BudgetsService } from "./budgets.service";

import { IBudget } from "./interfaces/budget.interface";

import { AddBudgetDto } from "./dto/add-budget.dto";

@Controller("budgets")
export class BudgetsController {
    constructor(private budgetsService: BudgetsService) {}

    @Post("add")
    async addExpense(@Body() addBudgetDto: AddBudgetDto) {
        return this.budgetsService.addBudget(addBudgetDto);
    }

    @Get()
    async getAllBudgets(): Promise<IBudget[]> {
        return this.budgetsService.getAllBudgets();
    }

    // @Delete("remove")
    // async removeIncome( @Body() removeExpenseDto: RemoveExpenseDto) {
    //     return this.expenseService.removeById(removeExpenseDto);
    // }
}

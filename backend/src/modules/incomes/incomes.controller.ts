import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";

// services
import { IncomesService } from "./incomes.service";

// interfaces
import { IIncome } from "./interfaces/income.interface";

// dto
import { AddIncomeDto } from "./dto/add-income.dto";
import { RemoveIncomeDto } from "./dto/remove-income.dto";

@Controller("incomes")
export class IncomesController {
    constructor(private incomesService: IncomesService) { }

    @Post("add")
    async addIncome( @Body() addIncomeDto: AddIncomeDto) {
        return this.incomesService.addIncome(addIncomeDto);
    }

    @Delete("remove")
    async removeIncome( @Body() removeIncomeDto: RemoveIncomeDto) {
        return this.incomesService.removeById(removeIncomeDto);
    }

    @Get()
    async findAll(): Promise<IIncome[]> {
        return this.incomesService.findAll();
    }
}

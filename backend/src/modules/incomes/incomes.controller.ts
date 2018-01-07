import { Body, Controller, Get, Param, Post } from "@nestjs/common";

// services
import { IncomesService } from "./incomes.service";

// interfaces
import { IIncome } from "./interfaces/income.interface";

// dto
import { AddIncomeDto } from "./dto/add-income.dto";

@Controller("incomes")
export class IncomesController {
    constructor(private incomesService: IncomesService) { }

    @Post("add")
    async addIncome( @Body() addIncomeDto: AddIncomeDto) {
        console.log(addIncomeDto);
        return this.incomesService.addIncome(addIncomeDto);
    }

    @Get()
    async findAll(): Promise<IIncome[]> {
        return this.incomesService.findAll();
    }
}

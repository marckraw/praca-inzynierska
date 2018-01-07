import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Observable } from "rxjs/Observable";

// interfaces
import { IIncome } from "./interfaces/income.interface";

// dto
import { AddIncomeDto } from "./dto/add-income.dto";

@Component()
export class IncomesService {
    constructor(
        @Inject("IncomeModelToken") private readonly incomeModel: Model<IIncome>,
    ) { }

    async addIncome(addIncomeDto: AddIncomeDto): Promise<IIncome> {
        const addedIncome = new this.incomeModel(addIncomeDto);
        return await addedIncome.save();
    }

    async findAll(): Promise<IIncome[]> {
        return this.incomeModel.find().exec();
    }
}

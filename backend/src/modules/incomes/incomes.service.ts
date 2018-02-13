import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Observable } from "rxjs/Observable";

// interfaces
import { IIncome } from "./interfaces/income.interface";

// dto
import { AddIncomeDto } from "./dto/add-income.dto";
import { RemoveIncomeDto } from "./dto/remove-income.dto";

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

    // async findById(id): Promise<IIncome> {
    //     return this.incomeModel.findById(id).exec();
    // }

    async removeById(removeIncomeDto: RemoveIncomeDto): Promise<IIncome> {
        return this.incomeModel.findByIdAndRemove(removeIncomeDto._id).exec();
    }
}

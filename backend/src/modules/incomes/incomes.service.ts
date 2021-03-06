import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Observable } from "rxjs/Observable";

// interfaces
import { IIncome } from "./interfaces/income.interface";

// dto
import { AddIncomeDto } from "./dto/add-income.dto";
import { EditIncomeDto } from "./dto/edit-income.dto";
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

    async editIncome(editIncomeDto: EditIncomeDto) {
        const id = editIncomeDto._id;

        return await this.incomeModel.findByIdAndUpdate(id, editIncomeDto);
    }

    async findAll(): Promise<IIncome[]> {
        return this.incomeModel.find().exec();
    }

    public getByUserAndMethod(userId, method): Promise<IIncome[]> {
        return this.incomeModel.find({userId, paymentMethod: method }).exec();
    }

    async find(userId): Promise<IIncome[]> {
        return this.incomeModel.find({userId}).exec();
    }

    async removeById(removeIncomeDto: RemoveIncomeDto): Promise<IIncome> {
        return this.incomeModel.findByIdAndRemove(removeIncomeDto._id).exec();
    }
}

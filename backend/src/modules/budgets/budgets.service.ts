import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Observable } from "rxjs/Observable";

// interfaces
import { IBudget } from "./interfaces/budget.interface";

// dto
import { AddBudgetDto } from "./dto/add-budget.dto";
import { RemoveBudgetDto } from "./dto/remove-budget.dto";

@Component()
export class BudgetsService {
    constructor(
        @Inject("BudgetsModelToken") private readonly budgetsModel: Model<IBudget>,
    ) {}

    async addBudget(addBudgetDto: AddBudgetDto): Promise<IBudget> {
        const addedBudget = new this.budgetsModel(addBudgetDto);
        return await addedBudget.save();
    }

    async getAllBudgets(): Promise<IBudget[]> {
        return this.budgetsModel.find().exec();
    }

    async removeById(removeBudgetDto: RemoveBudgetDto): Promise<IBudget> {
        return this.budgetsModel.findByIdAndRemove(removeBudgetDto._id).exec();
    }
}

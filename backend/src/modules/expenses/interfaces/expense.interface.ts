import { Document } from "mongoose";

export interface IExpense extends Document {
    name: string;
    where: string;
    when: string;
    qt: number;
    paymentMethod: string;
    cost: number;
    totalCost: number;
}

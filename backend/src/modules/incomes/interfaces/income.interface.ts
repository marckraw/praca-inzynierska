import { Document } from "mongoose";

export interface IIncome extends Document {
    // readonly _id: string;
    readonly name: string;
    readonly when: string;
    readonly paymentMethod: string;
    readonly value: number;
    readonly userId: string;
}

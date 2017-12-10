import { Document } from 'mongoose';

export interface IExpense extends Document {
    readonly name: string,
}

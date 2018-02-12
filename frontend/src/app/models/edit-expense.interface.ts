import { IExpense } from "./expense.interface";

export interface IEditExpense {
    confirmed: boolean;
    expense: IExpense;
}

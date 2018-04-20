import { Document } from "mongoose";

export interface Categories {
    _id: string;
    name: string;
    declaredAmount: number;
    enteredAmount: number;
}

export interface IBudget extends Document {
    _id: string;
    name: string;
    startDate: string;
    endDate: string;
    categories: Categories[];
    userId: string;
}

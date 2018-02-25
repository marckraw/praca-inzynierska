import { Document } from "mongoose";

export interface Categories {
    id: number;
    name: string;
    declaredAmount: number;
    enteredAmount: number;
}

export interface IBudget extends Document {
    name: string;
    startDate: string;
    endDate: string;
    isAlive: boolean;
    categories: Categories[];
}

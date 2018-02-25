import { Connection } from "mongoose";

import { ExpenseSchema } from "./schemas/expense.schema";

export const expensesProviders = [
    {
        provide: "ExpenseModelToken",
        useFactory: (connection: Connection) => connection.model("Expenses", ExpenseSchema),
        inject: ["DbConnectionToken"],
    },
];

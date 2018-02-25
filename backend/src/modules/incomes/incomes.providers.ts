import { Connection } from "mongoose";
import { IncomeSchema } from "./schemas/income.schema";

export const incomesProviders = [
    {
        provide: "IncomeModelToken",
        useFactory: (connection: Connection) => connection.model("Incomes", IncomeSchema),
        inject: ["DbConnectionToken"],
    },
];

import { Connection } from "mongoose";

import { BudgetsSchema } from "./schemas/budgets.schema";

export const budgetsProviders = [
    {
        provide: "BudgetsModelToken",
        useFactory: (connection: Connection) => connection.model("Budgets", BudgetsSchema),
        inject: ["DbConnectionToken"],
    },
];

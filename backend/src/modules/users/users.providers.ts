import { Connection } from "mongoose";
import { UserSchema } from "./schemas/user.schema";

export const usersProviders = [
    {
        provide: "UsersModelToken",
        useFactory: (connection: Connection) => connection.model("Users", UserSchema),
        inject: ["DbConnectionToken"],
    },
];

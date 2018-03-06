import { Document } from "mongoose";

export interface IUser extends Document {
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly passwordHash: string;
    readonly passwordSalt: string;
}

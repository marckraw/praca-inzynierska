import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    passwordHash: String,
    passwordSalt: String,
});

UserSchema.methods.setPassword = (password) => {
    this.passwordSalt = crypto.randomBytes(16).toString("hex");
    this.passwordHash = crypto.pbkdf2Sync(password, this.passwordSalt, 1000, 64, "sha512").toString("hex");
};

UserSchema.methods.validPassword = (password) => {
    const hash = crypto.pbkdf2Sync(password, this.passwordSalt, 1000, 64, "sha512").toString("hex");
    return this.passwordHash === hash;
};

UserSchema.methods.generateJwt = () => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        exp: expiry.getTime() / 1000,
    }, "MY_SECRET");
};

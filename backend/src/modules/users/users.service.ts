import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Observable } from "rxjs/Observable";

import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";

// interfaces
import { IUser } from "./interfaces/user.interface";

// dto
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";

@Component()
export class UsersService {
    constructor(
        @Inject("UsersModelToken") private readonly userModel: Model<IUser>,
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        const passwordSalt = this.saltPassword(createUserDto.password);
        const passwordHash = this.hashPassword(createUserDto.password, passwordSalt);

        const userToSave = {
            email: createUserDto.email,
            firstName: createUserDto.firstName,
            lastName: createUserDto.lastName,
            passwordHash,
            passwordSalt,
        };

        console.log(userToSave);

        const createdUser = new this.userModel(userToSave);
        return await createdUser.save();

        // const createdUser = new this.userModel(createUserDto);
        // createdUser.setPassword();
        // return await createdUser;
    }

    async login(loginUserDto: LoginUserDto): Promise<{} | boolean> {
        // const passwordSalt = this.saltPassword(createUserDto.password);
        // const passwordHash = this.hashPassword(createUserDto.password, passwordSalt);

        // const userToSave = {
        //     email: createUserDto.email,
        //     firstName: createUserDto.firstName,
        //     lastName: createUserDto.lastName,
        //     passwordHash,
        //     passwordSalt,
        // };

        const user = await this.userModel.findOne({email: loginUserDto.email});

        console.log(user);

        const result = await this.validPassword(loginUserDto.password, user.passwordSalt, user.passwordHash);

        if (result) {
            console.log("user service backend result: " + result);
            const authenticatedUserJWT = this.generateJwt(user);
            console.log("JWT: " + authenticatedUserJWT);

            return { authenticatedUserJWT };
        } else {
            return result;
        }


        // wyszukaj usera o podanym emailu (loginUserDto.email)
        // porownaj haslo z loginUserDto.password z hasłem tego usera (poprzez posolenie hasla)
        // wyslij info, czy jest poprawne



        // console.log(userToSave);

        // const createdUser = new this.userModel(userToSave);
        // return await createdUser.save();

        // const createdUser = new this.userModel(createUserDto);
        // createdUser.setPassword();
        // return await createdUser;
    }


    saltPassword = (password) => {
        return crypto.randomBytes(16).toString("hex");
    }

    hashPassword = (password, salt) => {
        return crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
    }

    validPassword = (password, salt, userHash) => {
        const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
        return userHash === hash;
    }

    generateJwt = (user) => {
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 7);

        return jwt.sign({
            _id: user._id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            exp: expiry.getTime() / 1000,
        }, "MY_SECRET");
    }

    // async createUser(createUserDto: CreateUserDto): any { // Promise<IUser>

    //     console.log(createUserDto.password);
    //     // const createdUser = new this.userModel(createUserDto);
    //     // createdUser.setPassword();
    //     // return await createdUser;
    // }

    async findAll(): Promise<IUser[]> {
        return this.userModel.find().exec();
    }
}

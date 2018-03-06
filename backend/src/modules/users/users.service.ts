import { Component, Inject } from "@nestjs/common";
import { Model } from "mongoose";
import { Observable } from "rxjs/Observable";

// interfaces
import { IUser } from "./interfaces/user.interface";

// dto
import { CreateUserDto } from "./dto/create-user.dto";

@Component()
export class UsersService {
    constructor(
        @Inject("UsersModelToken") private readonly userModel: Model<IUser>,
    ) { }

    async createUser(createUserDto: CreateUserDto): Promise<IUser> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async findAll(): Promise<IUser[]> {
        return this.userModel.find().exec();
    }
}

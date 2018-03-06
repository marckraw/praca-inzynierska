import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

// services
import { UsersService } from "./users.service";

// interfaces
import { IUser } from "./interfaces/user.interface";

// dto
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post("create")
    async createUser( @Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    // @Get(":id")
    // async findById(id: number) {
    //     // implement findById
    // }

    @Get()
    async findAll(): Promise<IUser[]> {
        return this.usersService.findAll();
    }

}

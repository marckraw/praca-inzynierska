import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

// services
import { UsersService } from "./users.service";

// interfaces
import { IUser } from "./interfaces/user.interface";

// dto
import { CreateUserDto } from "./dto/create-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";

@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post("create")
    async createUser( @Body() createUserDto: CreateUserDto) {
        console.log("from users/create controller");
        console.log(createUserDto);
        return this.usersService.createUser(createUserDto);
    }

    @Post("login")
    async login( @Body() loginUserDto: LoginUserDto) {
        console.log("from users/create controller");
        console.log(loginUserDto);
        return await this.usersService.login(loginUserDto);
    }

    // @Post("create")
    // async createUser( @Body() createUserDto: CreateUserDto) {
    //     return this.usersService.createUser(createUserDto);
    // }

    // @Get(":id")
    // async findById(id: number) {
    //     // implement findById
    // }

    @Get()
    findAll(): void { //Promise<IUser[]>
        console.log("dupa");
        // return this.usersService.findAll();
    }

}

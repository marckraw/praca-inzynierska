import { Controller, Get, Post, Body, Param } from '@nestjs/common';

// service
import { CatsService } from "./cats.service";

// interfaces
import { Cat } from './interfaces/cat.interface';

// dto
import { CreateCatDto } from "./dto/create-cat.dto";

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        console.log(createCatDto);
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}

import { Get, Controller } from '@nestjs/common';

@Controller('dupa')
export class TestController {
    @Get()
    gniot() {
        return { dupa: "ziomek1", dupa2: "ziomek2" }
    }
}

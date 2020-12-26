import { Controller, Get } from '@nestjs/common';

@Controller('users/login')
export class LoginController {

    @Get()
    geLoginUsers(){
        return `This return login users`;
    }
}

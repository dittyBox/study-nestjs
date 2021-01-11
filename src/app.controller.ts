import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { AuthService } from './members/auth/auth.service';
import { LocalAuthGuard } from './members/auth/guards/local-auth.guard';
import { LoginMemberDto } from './members/dto/create-member.dto';
import { Response,ResponseMessage} from "./util/response.utill";
import { JwtAuthGuard } from './members/auth/guards/jwt-auth.guard';
@Controller()
export class AppController {
    constructor(private readonly authService: AuthService,
    ) {}

    //@UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Body() logins: LoginMemberDto): Promise<Response> {
       const tokens = await  this.authService.login(logins);
       console.log(tokens);
       return new ResponseMessage().success().body(tokens).build();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/login')
    getApi(){
        return `Ditty Api 소개`;
    }

  
 }

import { Controller,Post,Get,Body,Request,UseGuards,Req } from '@nestjs/common';
import { Response,ResponseMessage} from "../util/response.utill";
import { AuthService } from './auth.service';
import { LoginMemberDto } from '../members/dto/create-member.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('api')
export class AuthController { 
    
    constructor(private readonly authService: AuthService,
        ) {}

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Req() access_token) {
       return access_token;
    // async login(@Body() logins: LoginMemberDto): Promise<Response> {
    //    const tokens = await  this.authService.login(logins);
    //    console.log('tokens : ',tokens);
       
    //   if (!tokens) {
    //     return new ResponseMessage()
    //       .error(8001, `로그인에 실패 하였습니다. Login_id: ${logins.LOGIN_ID}`)
    //       .build();
    //   } else {
    //     return new ResponseMessage().success().body(tokens).build();
    //   }
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
    
}

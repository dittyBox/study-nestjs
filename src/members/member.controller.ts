import { Body, Controller, Get, Logger, Param, Post, Delete, UseGuards, Request } from '@nestjs/common';
import { Response,ResponseMessage} from "../util/response.utill";
import { MemberInfo, AuthMemberInfo  } from "./member.type";
import { MemberService } from "./member.service";
import { CreateMemberDto } from './dto/create-member.dto';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller('members')
export class MemberController {
  constructor(
    private readonly memberService: MemberService,
    private authService: AuthService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() logins: LoginMemberDto): Promise<Response> {
    const tokens = this.authService.login(logins.LOGIN_ID);
    return new ResponseMessage().success().body(tokens).build();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async addMember(@Body() register: CreateMemberDto): Promise<Response> {
    try {
      // 인증된 사용자 인지 확인
      //const authMember:AuthMemberInfo = await this.memberService.getAuthMember(register.AUTHMEMBERID);
      //console.log(register.AUTHMEMBERID);
      //if(!authMember){
      //     return new ResponseMessage().error(9000,`권한오류 Memberid: ${register.AUTHMEMBERID}`).build();
      //}

      const member: MemberInfo = await this.memberService.addMember(register);

      if (!member) {
        return new ResponseMessage()
          .error(9001, `사용자 등록 실패 Login_id: ${register.LOGIN_ID}`)
          .build();
      }

      return new ResponseMessage().success().body(member).build();
    } catch (err) {
      Logger.error(err);
    }
  }

  @Get('/:memberid')
  async getMember(@Param('memberid') memberid: number): Promise<Response> {
    try {
      const member: MemberInfo = await this.memberService.getMember(memberid);

      if (!member) {
        return new ResponseMessage()
          .error(404, `Not found memberid : ${memberid}`)
          .build();
      }

      return new ResponseMessage().success().body(member).build();
    } catch (err) {
      Logger.error(err);
    }
  }

  @Delete('/:memberid')
  async deleteMember(@Param('memberid') memberid: number): Promise<Response> {
    try {
      const member: MemberInfo = await this.memberService.getMember(memberid);

      if (!member) {
        return new ResponseMessage()
          .error(404, `Not found memberid : ${memberid}`)
          .build();
      }

      return new ResponseMessage().success().body(member).build();
    } catch (err) {
      Logger.error(err);
    }
  }

  /*     @Get('/:memberid')
    getTestValue(@Param("memberid") memberid: string) : string {
        return `<B><center><h1>너의 이름은 ${memberid} 입니다.</h1></center></B>`;
    } */
}

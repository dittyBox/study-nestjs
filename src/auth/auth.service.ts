import { Injectable } from '@nestjs/common';
import { MemberService } from '../members/member.service';
import { MemberInfo } from '../members/member.type';
import { JwtService } from '@nestjs/jwt';
import { LoginMemberDto } from '../members/dto/create-member.dto';

@Injectable()
export class AuthService {
  constructor(
    private memberService: MemberService,
    private jwtService: JwtService,
  ) {}

  //암호화 필요
  //https://github.com/kelektiv/node.bcrypt.js#readme
  async validateMember(LOGIN_ID: string, PASSWORD: string): Promise<any> {
    const member: MemberInfo = await this.memberService.loginMember(LOGIN_ID);
    if(!member){
      return false;
    }
    const payload = { memberid: member.LOGIN_ID, membername: member.NAME };
    const access_token: string = this.jwtService.sign(payload);

    return {access_token: access_token};
  }

  async login(user: LoginMemberDto) {
    const member: MemberInfo = await this.memberService.loginMember(user.LOGIN_ID);
    if(!member){
      return false;
    }
    const payload = { memberid: member.LOGIN_ID, membername: member.NAME };
    const access_token: string = this.jwtService.sign(payload);

    return {access_token: access_token};
  }
}

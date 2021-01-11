import { Injectable } from '@nestjs/common';
import { MemberService } from '../member.service';
import { MemberInfo } from '../member.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private memberService: MemberService,
    private jwtService: JwtService,
  ) {}

  //암호화 필요
  //https://github.com/kelektiv/node.bcrypt.js#readme
  async validateMember(userid: string, password: string): Promise<any> {
    const user: MemberInfo = await this.memberService.loginMember(userid);
    if (user && user.PASSWORD === password) {
      const { PASSWORD, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

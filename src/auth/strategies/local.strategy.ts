import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(LOGIN_ID: string, PASSWORD: string): Promise<any> {
    console.log('로컬 스트레티지', LOGIN_ID, PASSWORD);
    //const access_token = await this.authService.validateMember(LOGIN_ID, PASSWORD);
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    return LOGIN_ID;
  }
}

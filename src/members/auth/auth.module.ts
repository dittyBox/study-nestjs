import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MemberModule } from '../member.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true,envFilePath: ['.env.dev'],}),
    MemberModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRETKEY, // env에 추가 필요 JWT_SECRETKEY: 아무거나
      signOptions: { expiresIn: '360000s' }, //토큰의 만료시간 60초
    }),
  ],
  controllers: [],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}

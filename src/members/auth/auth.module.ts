import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MemberModule } from '../member.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
    imports: [
        MemberModule,
        PassportModule],
    controllers: [],
    providers: [
        AuthService,
        LocalStrategy],
})
export class AuthModule {}

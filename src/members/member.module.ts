import { MemberService } from './member.service';
import { LoginService } from './login/login.service';
import { Module } from '@nestjs/common';
import { AuthMemberRepository, MemberRepository } from "./member.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MemberController } from './member.controller';

@Module({
    imports: [TypeOrmModule.forFeature([MemberRepository,AuthMemberRepository])],
    controllers: [MemberController],
    providers: [
        MemberService, 
        LoginService,],
})
export class UsersModule { }

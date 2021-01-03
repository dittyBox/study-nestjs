import { Module } from '@nestjs/common';
import { AuthMemberRepository, MemberRepository } from "./member.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
    imports: [TypeOrmModule.forFeature([MemberRepository,AuthMemberRepository])],
    controllers: [MemberController],
    providers: [
        MemberService, ],
    exports: [MemberService],
})
export class MemberModule { }

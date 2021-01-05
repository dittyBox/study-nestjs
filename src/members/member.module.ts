import { Module } from '@nestjs/common';
import { AuthMemberRepository, MemberRepository } from "./member.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import {ConfigModule} from '@nestjs/config';

@Module({
    imports: [TypeOrmModule.forFeature([MemberRepository,AuthMemberRepository]),ConfigModule],
    controllers: [MemberController],
    providers: [
        MemberService ],
    exports: [MemberService],
})
export class MemberModule { }

import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { MemberRepository } from "./member.repository";
import { MemberInfo, Register } from './member.type';

@Injectable()
export class MemberService {
    constructor(private readonly memberRepository: MemberRepository){}

    public async getMember(memberid: number): Promise<MemberInfo>{
        const member: MemberInfo = await this.memberRepository.findOne({
            where:{
                MEMBERID: memberid
            }
        });

        return member;
    }

    public async addMember(register: CreateMemberDto): Promise<MemberInfo>{
        try{

            const registerMember = await this.memberRepository.create();

            registerMember.TYPE = register.TYPE;
            registerMember.STATE = register.STATE;
            registerMember.ISABSENT = register.ISABSENT;
            registerMember.NAME = register.NAME;
            registerMember.LOGIN_ID = register.LOGIN_ID;
            registerMember.PASSWORD = register.PASSWORD;
    
            const member = await this.memberRepository.save(registerMember);
            const memberInfo: MemberInfo = {
                MEMBERID: member.MEMBERID,
                TYPE: member.TYPE,
                STATE: member.STATE,
                ISABSENT: member.ISABSENT,  
                NAME: member.NAME,
                LOGIN_ID: member.LOGIN_ID, 
                PASSWORD: member.PASSWORD
            };
            
            return memberInfo;
        }catch(err){
            return null;
        }

    }
    
 }

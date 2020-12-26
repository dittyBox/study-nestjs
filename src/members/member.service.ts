import { Injectable } from '@nestjs/common';
import { MemberRepository } from "./member.repository";
import { MemberInfo, Register } from './member.type';

@Injectable()
export class MemberService {
    constructor(private readonly memberRepository: MemberRepository){}

    public async addMember(register: Register): Promise<MemberInfo>{
        const registerMember = await this.memberRepository.create();

        registerMember.membertype = register.membertype;
        registerMember.loginid = register.loginid;
        registerMember.password = register.password;
        registerMember.email = register.email;
        registerMember.state = register.state;
        registerMember.employeenumber = register.employeenumber;
        registerMember.deptid = register.deptid;
        registerMember.name = register.name;

        const member = await this.memberRepository.save(registerMember);
        const memberInfo: MemberInfo = {
            name: member.name,
            memberid: member.memberid,
            membertype: member.membertype,
            loginid: member.loginid,  
            password: member.password,
            email: member.email, 
            state: member.state,
            employeenumber: member.employeenumber,
            creationdtime: member.creationdtime
        };

        return memberInfo;

    }
    
 }

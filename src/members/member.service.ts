import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { MemberRepository, AuthMemberRepository } from './member.repository';
import { AuthMemberInfo, MemberInfo } from './member.type';

@Injectable()
export class MemberService {
  constructor(
    //private readonly config: ConfigService,
    private readonly memberRepository: MemberRepository,
    private readonly authMemberRepository: AuthMemberRepository,
  ) {}

  public async getAuthMember(memberid: number): Promise<AuthMemberInfo> {
    const member: AuthMemberInfo = await this.authMemberRepository.findOne({
      where: {
        MEMBERID: memberid,
        TYPE: 'A',
      },
    });

    return member;
  }

  public async getMember(memberid: number): Promise<MemberInfo> {
    const member: MemberInfo = await this.memberRepository.findOne({
      where: {
        MEMBERID: memberid,
      },
    });
    //console.log(this.config.get('DATABASE_URL'));
    return member;
  }

  public async loginMember(loginid: string): Promise<MemberInfo> {
    const member: MemberInfo = await this.memberRepository.findOne({
      where: {
        LOGIN_ID: loginid,
      },
    });
    return member;
  }

  public async addMember(register: CreateMemberDto): Promise<MemberInfo> {
    try {
      
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
        PASSWORD: member.PASSWORD,
      };

      return memberInfo;
    } catch (err) {
      return null;
    }
  }
}

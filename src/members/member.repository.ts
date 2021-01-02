import { Repository, EntityRepository } from "typeorm";
import { authmember, Member } from "src/entities/member.entity"

@EntityRepository(Member)
export class MemberRepository extends Repository<Member>{
}
    
@EntityRepository(authmember)
export class AuthMemberRepository extends Repository<authmember>{
}
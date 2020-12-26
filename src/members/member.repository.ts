import { Repository, EntityRepository } from "typeorm";
import { Member } from "src/entities/member.entity"

@EntityRepository(Member)
export class MemberRepository extends Repository<Member>{
    
}
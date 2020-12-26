import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { Response,ResponseMessage} from "../util/response.utill";
import { Register,MemberInfo,Login  } from "./member.type";
import { MemberService } from "./member.service";

@Controller('member')
export class MemberController {

    constructor(private readonly memberService: MemberService){}

    @Post()
    async addMember(@Body() register: Register): Promise<Response> {

        try{
            const member:MemberInfo = await this.memberService.addMember(register);

            return new ResponseMessage().success().body(member).build();
            
        } catch(err){
            Logger.error(err);
        }
    }

    @Get('/login/')
    getLoginMember(){
        return `누가 먼저 실행이 될까?`;
    }
}

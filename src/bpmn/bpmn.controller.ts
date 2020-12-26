import { Controller, Delete, Get, Param } from '@nestjs/common';

@Controller('bpmn')
export class BpmnController {

    @Get()
    getProcsAll(){
        return 'This will return all procsess list';
    }
    
    @Get("/:procid")
    getOneProcs(@Param("procid") procid: string){
        return `This will return One Procsess with the procid: ${procid}`;
    }

    @Delete("/:procid")
    deleteProcs(@Param("procid") procid: string){
        return `this will delete a procsess with the procid: ${procid}`;
    }
}

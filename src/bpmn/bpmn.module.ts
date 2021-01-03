import { Module } from '@nestjs/common';
import { BpmnService } from './bpmn.service';
import { BpmnController } from './bpmn.controller';

@Module({
    imports: [],
    controllers: [BpmnController],
    providers: [
        BpmnService,],
})
export class BpmnModule { }

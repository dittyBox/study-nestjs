import { DefinitionService } from './definition.service';
import { DefinitionController } from './definition.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        DefinitionController,],
    providers: [
        DefinitionService,],
})
export class DefinitionModule { }

import { DefinitionModule } from './bpmn/definition/definition.module';
import { AppController } from './app.controller';
import { BpmnModule } from './bpmn/bpmn.module';
import { MemberModule } from './members/member.module';
import { AuthModule } from './members/auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
        DefinitionModule, 
        BpmnModule, 
        AuthModule,
        MemberModule, 
        TypeOrmModule.forRoot()],
  controllers: [
        AppController, ],
  providers: [],
})
export class AppModule { }

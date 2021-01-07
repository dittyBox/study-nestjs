import { DefinitionModule } from './bpmn/definition/definition.module';
import { AppController } from './app.controller';
import { BpmnModule } from './bpmn/bpmn.module';
import { MemberModule } from './members/member.module';
import { AuthModule } from './members/auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal: true,envFilePath: ['.env.dev'],}),
        DefinitionModule, 
        BpmnModule, 
        AuthModule,
        MemberModule, 
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            autoLoadEntities: true,
            synchronize: true
          })],
  controllers: [
        AppController, ],
  providers: [],
})
export class AppModule { }

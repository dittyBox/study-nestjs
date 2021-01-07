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
            type: "mariadb",
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            connectTimeout: Number(process.env.CONNECT_TIMEOUT),
            logging: true,
            synchronize: false
            })],
  controllers: [
        AppController, ],
  providers: [],
})
export class AppModule { }

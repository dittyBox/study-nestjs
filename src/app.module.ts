import { LoginController } from './members/login/login.controller';
import { LoginService } from './members/login/login.service';
import { UsersModule } from './members/member.module';
import { Module } from '@nestjs/common';
import { BpmnController } from './bpmn/bpmn.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule, TypeOrmModule.forRoot()],
  controllers: [
    LoginController, BpmnController],
  providers: [
    LoginService,],
})
export class AppModule { }

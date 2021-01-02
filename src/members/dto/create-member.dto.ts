import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateMemberDto{

    @IsString()
    readonly TYPE: string;

    @IsString()
    readonly STATE: string;

    @IsString()
    readonly ISABSENT: string;

    @IsString()
    readonly NAME: string;  

    @IsOptional()
    @IsString()
    readonly JOBTITLE: string;

    @IsOptional()
    @IsString()
    readonly DEPT_ID: string;

    @IsOptional()
    @IsString()
    readonly DEPT_NAME: string;

    @IsOptional()
    @IsString()
    readonly DEPT_CODE: string;

    @IsString()
    readonly PASSWORD: string;

    @IsOptional()
    @IsString()
    @IsEmail()
    readonly EMAIL: string;

    @IsOptional()
    @IsString()
    readonly PARENT_DEPT_ID: string;

    @IsString()
    readonly LOGIN_ID: string;

    @IsOptional()
    @IsString()
    readonly EMPLOYEE: string;

    @IsOptional()
    @IsDate()
    readonly ABSENT_START_DATE_TIME: Date;

    @IsOptional()
    @IsDate()
    readonly ABSENT_END_DATE_TIME: Date;

    @IsOptional()
    @IsString()
    readonly ABSENT_ID: string;

}

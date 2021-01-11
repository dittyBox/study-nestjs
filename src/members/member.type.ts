export type Login = {
    LOGIN_ID: string;
    PASSWORD: string;   
}

export type Register = {
    MEMBERID?: number;
    TYPE: string;  
    STATE: string;
    ISABSENT: string;
    NAME: string;  
    JOBTITLE: string;
    DEPT_ID: string;
    DEPT_NAME: string;
    DEPT_CODE: string;
    PASSWORD: string;
    EMAIL: string;
    PARENT_DEPT_ID: string;
    LOGIN_ID: string;
    EMPLOYEE: string;
    ABSENT_START_DATE_TIME: Date;
    ABSENT_END_DATE_TIME: Date;
    ABSENT_ID: string;
}

export type MemberInfo = {
    MEMBERID: number;
    TYPE: string;  
    STATE: string;
    ISABSENT: string;
    NAME: string;  
    JOBTITLE?: string;
    DEPT_ID?: string;
    DEPT_NAME?: string;
    DEPT_CODE?: string;
    PASSWORD: string;
    EMAIL?: string;
    PARENT_DEPT_ID?: string;
    LOGIN_ID: string;
    EMPLOYEE?: string;
    ABSENT_START_DATE_TIME?: Date;
    ABSENT_END_DATE_TIME?: Date;
    ABSENT_ID?: string;
}

export type AuthMemberInfo = {
    MEMBERID: number;
    TYPE: string;  
    NAME: string;  
    PROCESS_DEFINITION_ID?: number;
}

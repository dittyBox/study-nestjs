export type Login = {
 loginid: string;
 password: string;   
}

export type Register = {
    membertype: string;
    loginid: string;  
    password: string;
    name: string;
    email: string;  
    state: string;
    employeenumber: string;
    deptid: number;
    deptname: string;
    deptcode: string;
    pdeptid: number;
    pdeptname: string;
    pdeptcode: string;
    creationdtime: Date;
}

export type MemberInfo = {
    memberid: number;
    membertype: string;
    loginid: string;  
    password: string;
    name: string;
    email: string;  
    state: string;
    employeenumber: string;
    deptid?: number;
    deptname?: string;
    deptcode?: string;
    pdeptid?: number;
    pdeptname?: string;
    pdeptcode?: string;
    creationdtime: Date;
}
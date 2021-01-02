import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
    
    @Entity()
    export class Member {
      @PrimaryGeneratedColumn()
      MEMBERID: number;
    
      @Column({ length: 1 })
      TYPE: string;
    
      @Column({ length: 1 })
      STATE: string;
    
      @Column({ length: 1 })
      ISABSENT: string;
    
      @Column({ length: 100 })
      NAME: string;
    
      @Column({ length: 100 })
      JOBTITLE: string;
    
      @Column({ length: 10 })
      DEPT_ID: string;
    
      @Column({ length: 100 })
      DEPT_NAME: string;
    
      @Column({ length: 20 })
      DEPT_CODE: string;
    
      @Column({ length: 100 })
      PASSWORD: string;
    
      @Column({ length: 100 })
      EMAIL: string;
    
      @Column({ length: 10 })
      PARENT_DEPT_ID: string;
    
      @Column({ length: 50 })
      LOGIN_ID: string;
    
      @Column({ length: 50 })
      EMPLOYEE: string;
    
      @Column("datetime")
      ABSENT_START_DATE_TIME: Date;
    
      @Column("datetime")
      ABSENT_END_DATE_TIME: Date;
    
      @Column({ length: 10 })
      ABSENT_ID: string;
    }

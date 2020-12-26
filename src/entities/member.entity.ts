import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
    
    @Entity()
    export class Member {
      @PrimaryGeneratedColumn()
      memberid: number;
    
      @Column({ length: 1 })
      membertype: string;
    
      @Column({ length: 200 })
      name: string;
    
      @Column({ length: 1 })
      state: string;
    
      @Column({ length: 50 })
      employeenumber: string;
    
      @Column()
      deptid: number;
    
      @Column({ length: 100 })
      deptname: string;
    
      @Column({ length: 50 })
      deptcode: string;
    
      @Column()
      pdeptid: number;
    
      @Column({ length: 100 })
      pdeptname: string;
    
      @Column({ length: 50 })
      pdeptcode: string;
    
      @Column()
      absenceid: number;
    
      @Column("datetime")
      absencesdtime: Date;
    
      @Column("datetime")
      absenceedtime: Date;
    
      @Column({ length: 100 })
      loginid: string;
    
      @Column({ length: 100 })
      password: string;
    
      @Column({ length: 200 })
      email: string;
    
      @Column("timestamp")
      creationdtime: Date;
    }

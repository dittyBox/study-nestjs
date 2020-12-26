import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
    
    @Entity()
    export class procs {
      @PrimaryGeneratedColumn()
      procid: number;
    
      @Column({ length: 200 })
      name: string;
    
      @Column("timestamp")
      createdtime: Date;
    
      @Column("timestamp")
      deaddtime: Date;
    
      @Column({ length: 2 })
      state: string;
    
      @Column({ length: 50 })
      creator: string;
    }

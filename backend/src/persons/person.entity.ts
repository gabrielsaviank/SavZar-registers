import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  sex: string;
  @Column()
  birthdate: Date;
  @Column()
  maritalStatus: string;
}

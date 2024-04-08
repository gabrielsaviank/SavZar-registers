import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  sex: string;
  @Column()
  birthdate: string;
  @Column()
  maritalStatus: string;
}

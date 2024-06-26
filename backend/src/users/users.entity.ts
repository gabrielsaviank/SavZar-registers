import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PersonEntity } from '../persons/person.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ default: true })
  admin: boolean;
  @OneToMany(() => PersonEntity, (person) => person.user)
  persons: PersonEntity[];
}

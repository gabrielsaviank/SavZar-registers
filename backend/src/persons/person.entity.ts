import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../users/users.entity';

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

  @ManyToOne(() => UserEntity, (user) => user.persons)
  user: UserEntity;
}

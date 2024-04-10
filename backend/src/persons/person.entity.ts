import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UserEntity } from '../users/users.entity';
import { AddressEntity } from '../addresses/address.entity';

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

  @OneToMany(() => AddressEntity, (address) => address.person)
  addresses: AddressEntity[];

  @ManyToOne(() => UserEntity, (user) => user.persons)
  user: UserEntity;
}

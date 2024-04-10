import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PersonEntity } from '../persons/person.entity';

@Entity()
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  postCode: string;

  @Column()
  neighbourhood: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @ManyToOne(() => PersonEntity, (person) => person.addresses)
  person: PersonEntity;
}

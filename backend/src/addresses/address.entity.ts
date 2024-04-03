import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

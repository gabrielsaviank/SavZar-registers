import { Expose } from 'class-transformer';

export class AddressDto {
  @Expose()
  id: string;
  @Expose()
  postCode: string;
  @Expose()
  neighbourhood: string;
  @Expose()
  number: number;
  @Expose()
  complement: string;
  @Expose()
  street: string;
  @Expose()
  city: string;
  @Expose()
  state: string;
  @Expose()
  personId: string;
}

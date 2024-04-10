import { IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  postCode: string;
  @IsString()
  neighbourhood: string;
  @IsNumber()
  number: number;
  @IsString()
  complement: string;
  @IsString()
  street: string;
  @IsString()
  city: string;
  @IsString()
  state: string;
}

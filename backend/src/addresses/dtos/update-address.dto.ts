import { IsNumber, IsString } from 'class-validator';

export class UpdateAddressDto {
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

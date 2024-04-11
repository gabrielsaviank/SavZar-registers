import { IsDateString, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAddressDto } from '../../addresses/dtos/create-address.dto';

export class CreatePersonDto {
  @IsString()
  name: string;

  @IsString()
  sex: string;

  @IsDateString()
  birthdate: string;

  @IsString()
  maritalStatus: string;

  @ValidateNested({ each: true })
  @Type(() => CreateAddressDto)
  addresses?: CreateAddressDto[];
}

import { IsString } from 'class-validator';

export class UpdatePersonDto {
  @IsString()
  name: string;
  @IsString()
  sex: string;
  @IsString()
  birthdate: string;
  @IsString()
  maritalStatus: string;
}

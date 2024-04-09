import { IsDateString, IsString } from 'class-validator';

export class CreatePersonDto {
  @IsString()
  name: string;

  @IsString()
  sex: string;

  @IsDateString()
  birthdate: string;

  @IsString()
  martialStatus: string;
}

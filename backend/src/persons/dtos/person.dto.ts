import { Expose, Transform } from 'class-transformer';

export class PersonDto {
  @Expose()
  id: string;
  @Expose()
  name: string;
  @Expose()
  sex: string;
  @Expose()
  birthdate: string;
  @Expose()
  martialStatus: string;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: string;
}

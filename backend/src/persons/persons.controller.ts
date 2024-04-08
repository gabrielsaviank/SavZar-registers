import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreatePersonDto } from './dtos/create-person.dto';
import { PersonsService } from './persons.service';
import { AuthGuard } from '../guards/auth.guard';
import { UserEntity } from '../users/users.entity';
import { CurrentUser } from '../users/decorators/current-user.decorator';

@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) {}

  @Post()
  @UseGuards(AuthGuard)
  createPerson(@Body() body: CreatePersonDto, @CurrentUser() user: UserEntity) {
    return this.personsService.create(body, user);
  }
}

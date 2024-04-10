import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { CreatePersonDto } from './dtos/create-person.dto';
import { PersonsService } from './persons.service';
import { AuthGuard } from '../guards/auth.guard';
import { UserEntity } from '../users/users.entity';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { PersonDto } from './dtos/person.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { AdminGuard } from '../guards/admin.guard';

@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseGuards(AdminGuard)
  @Serialize(PersonDto)
  createPerson(@Body() body: CreatePersonDto, @CurrentUser() user: UserEntity) {
    return this.personsService.create(body, user);
  }

  @Get()
  @UseGuards(AuthGuard)
  async getPersons() {
    return this.personsService.findAll();
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  async getPerson(@Param('id') id: string) {
    return this.personsService.getPerson(id);
  }
}

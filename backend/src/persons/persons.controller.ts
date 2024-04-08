import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreatePersonDto } from './dtos/create-person.dto';
import { PersonsService } from './persons.service';
import { AuthGuard } from '../guards/auth.guard';

@Controller('persons')
export class PersonsController {
  constructor(private personsService: PersonsService) {}

  @Post()
  @UseGuards(AuthGuard)
  createPerson(@Body() body: CreatePersonDto) {
    return this.personsService.create(body);
  }
}

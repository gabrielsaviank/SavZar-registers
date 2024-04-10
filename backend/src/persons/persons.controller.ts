import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreatePersonDto } from './dtos/create-person.dto';
import { PersonsService } from './persons.service';
import { AuthGuard } from '../guards/auth.guard';
import { UserEntity } from '../users/users.entity';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { PersonDto } from './dtos/person.dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { AdminGuard } from '../guards/admin.guard';
import { UpdatePersonDto } from './dtos/update-person.dto';
import { PersonEntity } from './person.entity';

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
  async getPersons(): Promise<PersonEntity[]> {
    return this.personsService.findAll();
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  async getPerson(@Param('id') id: string): Promise<PersonEntity> {
    return this.personsService.getPerson(id);
  }

  @Patch('/update/:id')
  @UseGuards(AdminGuard)
  @UseGuards(AuthGuard)
  async updatePerson(
    @Param('id') id: string,
    @Body() body: UpdatePersonDto,
  ): Promise<PersonEntity> {
    return this.personsService.update(id, body);
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard)
  @UseGuards(AdminGuard)
  async deletePerson(@Param('id') id: string): Promise<PersonEntity> {
    return this.personsService.remove(id);
  }
}

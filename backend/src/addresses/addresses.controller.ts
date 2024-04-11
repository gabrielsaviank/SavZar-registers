import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AuthGuard } from '../guards/auth.guard';
import { AdminGuard } from '../guards/admin.guard';
import { CreateAddressDto } from './dtos/create-address.dto';
import { AddressEntity } from './address.entity';
import { PersonsService } from '../persons/persons.service';
import { UpdateAddressDto } from './dtos/update-address.dto';
import { DeleteResult } from 'typeorm';
import { Serialize } from '../interceptors/serialize.interceptor';
import { AddressDto } from './dtos/address.dto';

@Controller('addresses')
export class AddressesController {
  constructor(
    private addressesService: AddressesService,
    private personsService: PersonsService,
  ) {}

  @Post('create/:personId')
  @UseGuards(AuthGuard)
  @UseGuards(AdminGuard)
  @Serialize(AddressDto)
  async createAddress(
    @Param('personId') personId: string,
    @Body() body: CreateAddressDto,
  ): Promise<AddressEntity> {
    const fetchedPerson = await this.personsService.findOneById(personId);

    return this.addressesService.create(body, fetchedPerson);
  }

  @Patch('/update/:id')
  @UseGuards(AuthGuard)
  @UseGuards(AdminGuard)
  async updateAddress(
    @Param('id') id: string,
    @Body() body: UpdateAddressDto,
  ): Promise<AddressEntity> {
    return this.addressesService.update(id, body);
  }

  @Delete('/delete/:id')
  @UseGuards(AuthGuard)
  @UseGuards(AdminGuard)
  async remove(id: string): Promise<DeleteResult> {
    return this.addressesService.remove(id);
  }
}

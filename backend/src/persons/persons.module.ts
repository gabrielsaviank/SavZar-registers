import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './person.entity';
import { AddressesService } from '../addresses/addresses.service';
import { AddressEntity } from '../addresses/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity, AddressEntity])],
  controllers: [PersonsController],
  providers: [PersonsService, AddressesService],
})
export class PersonsModule {}

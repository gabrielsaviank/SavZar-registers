import { Module } from '@nestjs/common';
import { AddressesController } from './addresses.controller';
import { AddressesService } from './addresses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './address.entity';
import { PersonsService } from '../persons/persons.service';
import { PersonEntity } from '../persons/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity, PersonEntity])],
  controllers: [AddressesController],
  providers: [AddressesService, PersonsService],
})
export class AddressesModule {}

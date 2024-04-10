import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './address.entity';
import { CreateAddressDto } from './dtos/create-address.dto';
import { PersonEntity } from '../persons/person.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressesRepository: Repository<AddressEntity>,
  ) {}

  async create(addressDto: CreateAddressDto, person: PersonEntity) {
    const address = this.addressesRepository.create({
      postCode: addressDto.postCode,
      neighbourhood: addressDto.neighbourhood,
      number: addressDto.number,
      complement: addressDto.complement,
      street: addressDto.street,
      city: addressDto.city,
      state: addressDto.state,
    });

    address.person = person;

    return this.addressesRepository.save(address);
  }
}

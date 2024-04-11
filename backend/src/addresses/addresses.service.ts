import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './address.entity';
import { CreateAddressDto } from './dtos/create-address.dto';
import { PersonEntity } from '../persons/person.entity';
import { DeleteResult, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(AddressEntity)
    private addressesRepository: Repository<AddressEntity>,
  ) {}

  async create(addressDto: CreateAddressDto, person: PersonEntity) {
    console.log('HERE');

    const address = this.addressesRepository.create({
      id: uuidv4(),
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

  async findAll() {
    return await this.addressesRepository.find();
  }

  async findOneById(id: string): Promise<AddressEntity> {
    if (!id) {
      throw new NotFoundException('Address not found');
    }

    return await this.addressesRepository.findOne({ where: { id } });
  }

  async update(
    id: string,
    attrs: Partial<AddressEntity>,
  ): Promise<AddressEntity> {
    const addressToUpdate = await this.findOneById(id);

    if (!addressToUpdate) {
      throw new NotFoundException('Address not found');
    }

    Object.assign(addressToUpdate, attrs);

    return this.addressesRepository.save(addressToUpdate);
  }

  async remove(id: string): Promise<DeleteResult> {
    return this.addressesRepository.delete(id);
  }
}

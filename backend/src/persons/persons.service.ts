import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from './person.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreatePersonDto } from './dtos/create-person.dto';
import { v4 as uuidv4 } from 'uuid';
import { UserEntity } from '../users/users.entity';
import { AddressesService } from '../addresses/addresses.service';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(PersonEntity)
    private personsRepository: Repository<PersonEntity>,
    private addressesService: AddressesService,
  ) {}

  async create(personDto: CreatePersonDto, user: UserEntity) {
    const person: any = {
      id: uuidv4(),
      name: personDto.name,
      sex: personDto.sex,
      birthdate: personDto.birthdate,
      maritalStatus: personDto.martialStatus,
    };

    const savedPerson = await this.personsRepository.save(person);

    if (personDto.addresses) {
      person.addresses = await Promise.all(
        personDto.addresses.map(async (address) => {
          return await this.addressesService.create(address, person);
        }),
      );
    }

    person.user = user;

    return savedPerson;
  }

  async getPerson(id: string) {
    if (!id) {
      throw new NotFoundException('Person not found');
    }

    return this.personsRepository.findOne({ where: { id } });
  }
}

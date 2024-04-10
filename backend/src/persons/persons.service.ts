import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from './person.entity';
import { DeleteResult, Repository } from 'typeorm';
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

  async create(
    personDto: CreatePersonDto,
    user: UserEntity,
  ): Promise<PersonEntity> {
    const person: any = {
      id: uuidv4(),
      name: personDto.name,
      sex: personDto.sex,
      birthdate: personDto.birthdate,
      maritalStatus: personDto.maritalStatus,
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

  async findAll() {
    return this.personsRepository.find({ relations: ['addresses'] });
  }

  async getPerson(id: string): Promise<PersonEntity> {
    if (!id) {
      throw new NotFoundException('Person not found');
    }

    return this.personsRepository.findOne({
      where: { id },
      relations: ['addresses'],
    });
  }

  async findOneById(id: string): Promise<PersonEntity> {
    if (!id) {
      throw new NotFoundException('Person not found');
    }

    return await this.personsRepository.findOne({ where: { id } });
  }

  async update(
    id: string,
    attrs: Partial<PersonEntity>,
  ): Promise<PersonEntity> {
    const person = await this.getPerson(id);

    if (!person) {
      throw new NotFoundException('Person not found');
    }

    Object.assign(person, attrs);

    return this.personsRepository.save(person);
  }

  async remove(id: string): Promise<PersonEntity> {
    const person = await this.getPerson(id);

    if (!person) {
      throw new NotFoundException('Person not found');
    }

    if (person.addresses) {
      await Promise.all(
        person.addresses.map(async (address): Promise<DeleteResult> => {
          return await this.addressesService.remove(address.id);
        }),
      );
    }

    return this.personsRepository.remove(person);
  }
}

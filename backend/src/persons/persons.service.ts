import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonEntity } from './person.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreatePersonDto } from './dtos/create-person.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(PersonEntity)
    private personsRepository: Repository<PersonEntity>,
  ) {}

  async create(personDto: CreatePersonDto) {
    // Take care of DeepPartial<PersonEntity> type
    const person: DeepPartial<PersonEntity> = {
      id: uuidv4(),
      name: personDto.name,
      sex: personDto.sex,
      birthdate: personDto.birthdate,
      maritalStatus: personDto.martialStatus,
    };
    return this.personsRepository.save(person);
  }
}

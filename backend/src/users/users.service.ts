import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Repository } from 'typeorm';

import { UserEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(email: string, password: string): Promise<UserEntity> {
    const user = this.usersRepository.create({
      email,
      password,
      id: uuidv4(),
    });

    return this.usersRepository.save(user);
  }

  async findOneById(id: string): Promise<UserEntity> {
    if (!id) {
      throw new NotFoundException('User not found');
    }
    return this.usersRepository.findOne({ where: { id } });
  }

  async find(email: string): Promise<UserEntity[]> {
    return this.usersRepository.find({ where: { email } });
  }

  async update(id: string, attrs: Partial<UserEntity>) {
    const user = await this.findOneById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    Object.assign(user, attrs);

    return this.usersRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.findOneById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.usersRepository.remove(user);
  }
}

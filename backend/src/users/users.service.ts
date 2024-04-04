import { Injectable } from '@nestjs/common';
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return this.usersRepository.findOne(id);
  }

  async find(email: string): Promise<UserEntity[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return this.usersRepository.find({ email });
  }

  async update(id: string, attrs: Partial<UserEntity>) {
    const user = await this.findOneById(id);
    if (!user) {
      throw new Error('User not found');
    }

    Object.assign(user, attrs);

    return this.usersRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.findOneById(id);

    if (!user) {
      throw new Error('User not found');
    }

    return this.usersRepository.remove(user);
  }
}

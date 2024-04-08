import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

import { UsersService } from './users.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signUp(email: string, password: string) {
    const checkExistingUser = await this.userService.find(email);

    if (checkExistingUser.length) {
      throw new BadRequestException('Email in use');
    }

    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');

    return await this.userService.createUser(email, result);
  }

  async signIn(email: string, password: string) {
    const [user] = await this.userService.find(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const [salt, storedHash] = user.password.split('.');
    const unhash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== unhash.toString('hex')) {
      throw new BadRequestException('Password is incorrect');
    }

    return user;
  }
}

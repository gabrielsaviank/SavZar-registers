import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto): Promise<UserEntity> {
    return this.authService.signUp(body.email, body.password);
  }

  @Post('/signin')
  async signIn(@Body() body: CreateUserDto): Promise<UserEntity> {
    return this.authService.signIn(body.email, body.password);
  }

  @Get()
  async findAllUsers(@Query('email') email: string): Promise<UserEntity[]> {
    return this.usersService.find(email);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Session,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './users.entity';
import { UpdateUserDto } from './dtos/update-user-dto';
import { CurrentUser } from './decorators/current-user.decorator';

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

  @Get('/:id')
  async findOneUser(@Query('id') id: string): Promise<UserEntity> {
    const user = await this.usersService.findOneById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  @Get()
  async findAllUsers(@Query('email') email: string): Promise<UserEntity[]> {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  async removeUser(@Param('id') id: string): Promise<UserEntity> {
    return this.usersService.remove(id);
  }

  @Patch('/update/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: UpdateUserDto,
  ): Promise<UserEntity> {
    return this.usersService.update(id, body);
  }

  // @Get('/whoami')
  // whoAmI(@Session() session: Record<string, any>): Promise<UserEntity> {
  //   return this.usersService.findOneById(session.userId);
  // }

  @Post('/logout')
  signOut(@Session() session: Record<string, any>) {
    session.userId = null;
  }

  @Get('/whoami')
  whoAmI(@CurrentUser() user: UserEntity) {
    return user;
  }
}

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
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './users.entity';
import { UpdateUserDto } from './dtos/update-user-dto';
import { Serialize } from '../interceptors/serialize.interceptor';
import { CurrentUser } from './decorators/current-user.decorator';
import { UserDto } from './dtos/user-dto';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';

@Controller('auth')
@Serialize(UserDto)
@UseInterceptors(CurrentUserInterceptor)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  // @Get('/whoami')
  // whoAmI(@Session() session: Record<string, any>): Promise<UserEntity> {
  //   return this.usersService.findOneById(session.userId);
  // }

  @Get('/whoami')
  whoAmI(@CurrentUser() user: UserEntity) {
    return user;
  }

  @Post('/signup')
  async createUser(
    @Body() body: CreateUserDto,
    @Session() session: any,
  ): Promise<UserEntity> {
    const user = await this.authService.signUp(body.email, body.password);
    session.userId = user.id;

    return user;
  }

  @Post('/signin')
  async signIn(
    @Body() body: CreateUserDto,
    @Session() session: any,
  ): Promise<UserEntity> {
    const user = await this.authService.signIn(body.email, body.password);
    session.userId = user.id;

    return user;
  }

  @Get('/:id')
  async findOneUser(@Param('id') id: string): Promise<UserEntity> {
    const user = await this.usersService.findOneById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  @UseInterceptors(ClassSerializerInterceptor)
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

  @Post('/signout')
  signOut(@Session() session: Record<string, any>) {
    session.userId = null;
  }
}

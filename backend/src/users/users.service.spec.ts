import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let repositoryMock: Partial<Repository<UserEntity>>;

  beforeEach(async () => {
    repositoryMock = {
      create: jest.fn(),
      save: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: repositoryMock,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      (repositoryMock.create as jest.Mock).mockReturnValueOnce({
        email: 'test@example.com',
        password: 'password',
      });

      const newUser = await service.createUser('test@example.com', 'password');

      expect(newUser).toBeDefined();
      expect(repositoryMock.create).toHaveBeenCalledTimes(1);
      expect(repositoryMock.save).toHaveBeenCalledTimes(1);
    });
  });
});

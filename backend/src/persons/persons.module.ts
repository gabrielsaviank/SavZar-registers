import { Module } from '@nestjs/common';
import { PersonsController } from './persons.controller';
import { PersonsService } from './persons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonEntity } from './person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity])],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}

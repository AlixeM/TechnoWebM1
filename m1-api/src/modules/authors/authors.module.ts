/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { AuthorsEntity } from './authors.entity';

@Module({
  providers: [AuthorsService],
    controllers: [AuthorsController],
    imports: [TypeOrmModule.forFeature([AuthorsEntity])]
 
})
export class AuthorsModule { }

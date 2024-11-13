/* eslint-disable prettier/prettier */

// book.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './books.entity';
import { BookService } from './books.service';
import { BookController } from './books.controller';

@Module({
    imports: [TypeOrmModule.forFeature([BookEntity])],
    providers: [BookService],
    controllers: [BookController],
})
export class BookModule { }
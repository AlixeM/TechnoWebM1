// src/book/book.controller.ts
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    findAll(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Book> {
        return this.bookService.findOne(id);
    }

    @Post()
    create(@Body() bookData: Partial<Book>): Promise<Book> {
        return this.bookService.create(bookData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.bookService.delete(id);
    }
}
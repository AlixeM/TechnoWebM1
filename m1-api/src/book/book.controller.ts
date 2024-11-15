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
    async getBookById(@Param('id') id: string): Promise<Book> {
        return this.bookService.findOne(Number(id));
    }

    @Post()
    create(@Body() bookData: Partial<Book>): Promise<Book> {
        return this.bookService.create(bookData);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
        return this.bookService.delete(Number(id));
    }
}
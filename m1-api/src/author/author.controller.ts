// src/author/author.controller.ts
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './author.entity';

@Controller('authors')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}

    @Get()
    findAll(): Promise<Author[]> {
        return this.authorService.findAll();
    }

    @Post()
    create(@Body() authorData: Partial<Author>): Promise<Author> {
        return this.authorService.create(authorData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.authorService.delete(id);
    }
}
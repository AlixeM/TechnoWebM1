/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto, UpdateAuthorDto } from './authors.dto';

@Controller('Authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) { }

    @Post()
    create(@Body() createAuthorsDto: CreateAuthorDto) {
        return this.authorsService.create(createAuthorsDto);
    }

    @Get()
    findAll() {
        return this.authorsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.authorsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateAuthorsDto: UpdateAuthorDto) {
        return this.authorsService.update(+id, updateAuthorsDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.authorsService.remove(+id);
    }
}
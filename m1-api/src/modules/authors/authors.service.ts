/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorsEntity } from './authors.entity';
import { CreateAuthorDto, UpdateAuthorDto } from './authors.dto';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(AuthorsEntity)
        private AuthorsRepository: Repository<AuthorsEntity>,
    ) { }

    create(createAuthorDto: CreateAuthorDto) {
        const Author = this.AuthorsRepository.create(createAuthorDto);
        return this.AuthorsRepository.save(Author);
    }

    findAll() {
        return this.AuthorsRepository.find();
    }

    findOne(id: number) {
        return this.AuthorsRepository.findOneBy({ id });
    }

    update(id: number, updateAuthorDto: UpdateAuthorDto) {
        return this.AuthorsRepository.update(id, updateAuthorDto);
    }

    remove(id: number) {
        return this.AuthorsRepository.delete(id);
    }
}
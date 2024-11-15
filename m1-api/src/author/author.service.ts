// src/author/author.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './author.entity';

@Injectable()
export class AuthorService implements OnModuleInit {
    constructor(
        @InjectRepository(Author)
        private authorRepository: Repository<Author>,
    ) {}

    async onModuleInit() {
        const count = await this.authorRepository.count();
        if (count === 0) {
            await this.authorRepository.save([
                { name: 'Jean Rostand', biography: 'Il était grand.'},
                { name: 'Marcel Pagnol', biography: 'Il était fort.'},
                { name: 'Victor Hugo', biography: 'Il était bon.'},
            ]);
        }
    }

    findAll(): Promise<Author[]> {return this.authorRepository.find();}

    create(authorData: Partial<Author>): Promise<Author> {
        const author = this.authorRepository.create(authorData);
        return this.authorRepository.save(author);
    }

    delete(id: number): Promise<void> {
        return this.authorRepository.delete(id).then(() => undefined);}
}
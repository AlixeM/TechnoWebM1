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
                { title: 'Les océans', description: 'Un livre sur les gros poissons'},
                { title: 'Les lacs', description: 'Un livre sur les poissons'},
                { title: 'Les rivières', description: 'Un livre sur les petits poissons'},
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
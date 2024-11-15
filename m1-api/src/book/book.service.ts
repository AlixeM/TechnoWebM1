// src/book/book.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BookService implements OnModuleInit {
    constructor(
        @InjectRepository(Book)
        private bookRepository: Repository<Book>,
    ) {}

    async onModuleInit() {
        const count = await this.bookRepository.count();
        if (count === 0) {
            await this.bookRepository.save([
                { title: 'Les océans', description: 'Un livre sur les gros poissons', publicationDate: '2021-01-01', price: '20'},
                { title: 'Les lacs', description: 'Un livre sur les poissons', publicationDate: '1908-12-01', price: '10'},
                { title: 'Les rivières', description: 'Un livre sur les petits poissons', publicationDate: '2002-05-01', price: '15'},
            ]);
        }
    }

    findAll(): Promise<Book[]> {return this.bookRepository.find();}

    create(bookData: Partial<Book>): Promise<Book> {
        const book = this.bookRepository.create(bookData);
        return this.bookRepository.save(book);
    }

    delete(id: number): Promise<void> {
        return this.bookRepository.delete(id).then(() => undefined);}

    findOne(id: number): Promise<Book> {
        return this.bookRepository.findOne({ where: {id}});
    }
}
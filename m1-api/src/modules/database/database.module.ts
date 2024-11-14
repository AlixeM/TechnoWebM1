/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from '../books/books.entity'; // Adjust path as needed
import { AuthorsEntity } from '../authors/authors.entity'; // Adjust path as needed
import { ReviewsEntity } from '../reviews/reviews.entity'; // Adjust path as needed

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: '../../../library.db',
            entities: [BookEntity, AuthorsEntity, ReviewsEntity], // Explicitly list entities
            synchronize: true,
        }),
    ],
})
export class DatabaseModule { }


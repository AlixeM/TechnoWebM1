/* eslint-disable prettier/prettier */

// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './modules/books/books.module';
import { AuthorsModule } from './modules/authors/authors.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { DatabaseModule } from './modules/database/database.module';
import { BookEntity } from './modules/books/books.entity'; // Adjust path as needed
import { AuthorsEntity } from './modules/authors/authors.entity'; // Adjust path as needed
import { ReviewsEntity } from './modules/reviews/reviews.entity'; // Adjust path as needed

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: '../../../library.db',
            entities: [BookEntity, AuthorsEntity, ReviewsEntity], // Explicitly list entities
            synchronize: true,
        }),
        BookModule,
        AuthorsModule,
        ReviewsModule,
        DatabaseModule,

    ],
})
export class AppModule { }


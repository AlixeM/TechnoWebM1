/* eslint-disable prettier/prettier */

// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './modules/books/books.module';
import { AuthorsModule } from './modules/authors/authors.module';
import { ReviewsModule } from './modules/reviews/reviews.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'library.db',
            entities: [__dirname + '/*/.entity{.ts,.js}'],
            synchronize: true,
        }),
        BookModule,
        AuthorsModule,
        ReviewsModule,

    ],
})
export class AppModule { }


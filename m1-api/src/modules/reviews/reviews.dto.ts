/* eslint-disable prettier/prettier */
import { BookEntity } from '../books/books.entity';
export class CreateReviewsDto {
    content: string;
    book: BookEntity;
    score: number;
    username: string;
}

export class UpdateReviewsDto {
    content?: string;
    book?: BookEntity;
    score?: number;
    username?: string;
}

/* eslint-disable prettier/prettier */
import { BookEntity } from '../books/books.entity';
export class CreateReviewsDto {
    score: number;
    review: string;
    posting_date: Date;
    book: BookEntity;
}

export class UpdateReviewsDto {
    score?: number;
    review?: string;
    posting_date?: Date;
    book?: BookEntity;
}

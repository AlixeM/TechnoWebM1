/* eslint-disable prettier/prettier */
import { BookEntity } from '../books/books.entity';
export class CreateAuthorDto {
    name: string;
    books: BookEntity[];
    biography: string;

}

export class UpdateAuthorDto {
    name?: string;
    books?: BookEntity[];
    biography?: string;
}
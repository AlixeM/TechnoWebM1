/* eslint-disable prettier/prettier */
import { BookEntity } from '../books/books.entity';
export class CreateAuthorDto {
    first_name: string;
    last_name: string;
    picture: Buffer;
    biography: string;
    books: BookEntity[];
}

export class UpdateAuthorDto {
    first_name?: string;
    last_name?: string;
    picture?: Buffer;
    biography?: string;
    books?: BookEntity[];
}
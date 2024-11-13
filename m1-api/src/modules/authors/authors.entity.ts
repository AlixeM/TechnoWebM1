/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BookEntity } from '../books/books.entity';

@Entity()
export class AuthorsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => BookEntity, (book) => book.author)
    books: BookEntity[];

    @Column({ length: 1000 })  // Limiting biography length to 1000 characters
    biography: string;
}

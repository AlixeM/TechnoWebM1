/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BookEntity } from '../books/books.entity';

@Entity()
export class AuthorsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text', length: 255, nullable: false}) 
    first_name: string;

    @Column({type: 'text', length: 255, nullable: false})
    last_name: string;

    @Column({ type: 'blob'})
    picture: Buffer;  // stocking the picture as a binary large object

    @Column({ type : 'text', length: 2000 }) 
    biography: string;

    // Relation One-to-Many with Book : an author can be associated with zero or many books
    @OneToMany(() => BookEntity, (book) => book.author) 
    books: BookEntity[];
}

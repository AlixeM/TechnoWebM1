/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { AuthorsEntity } from '../authors/authors.entity'; // Adjust path if necessary

@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn()  // Primary key, auto-incremented
    id: number;

    @Column()  // A column for book title
    title: string;

    @ManyToOne(() => AuthorsEntity, (author) => author.books)  // Many-to-one relationship with Author
    author: AuthorsEntity;

    @Column()  // A column for the publication year
    publicationYear: number;


}
/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { BookEntity } from '../books/books.entity';

@Entity()
export class ReviewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => BookEntity, (book) => book.id)
  book: BookEntity;

   @Column()
   score: number;

   @Column()
   username: string;
}

/* eslint-disable prettier/prettier */
// book.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinTable, JoinColumn } from 'typeorm';
import { Min, MaxDate } from 'class-validator';
import { AuthorsEntity } from '../authors/authors.entity';
import { ReviewsEntity } from '../reviews/reviews.entity';

@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'text', nullable:false})
    title: string;

    @Column({ type: 'date' }) // nullable so we can add books without knowing the year of publication
    @MaxDate(new Date())
    publicationDate: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2}) // 2 decimal places max, nullable if th book is not currently available
    @Min(0)
    price: number;

    // Relation Many-to-One with Author : a book belongs to an author
    @ManyToOne(() => AuthorsEntity, (author) => author.books)
    @JoinColumn({ name: 'authorId' })
    author: AuthorsEntity;

    // Relation One-to-Many with Review : a book can have zero or many reviews
    @OneToMany(() => ReviewsEntity, (review) => review.book)
    @JoinTable()
    reviews: ReviewsEntity[];
}

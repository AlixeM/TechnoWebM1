/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsNumber, Min, Max } from 'class-validator';
import { BookEntity } from '../books/books.entity';

@Entity()
export class ReviewsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'int', nullable:false})
    @IsNumber()
    @Min(0)
    @Max(5)
    score: number;

    @Column({type:'text', length: 500, nullable:true}) // the review is optional
    review: string;

    @Column({ type: 'date', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    posting_date: Date;

    // Many-to-One relation with Book
    @ManyToOne(() => BookEntity, (book) => book.id) 
    book: BookEntity;
}

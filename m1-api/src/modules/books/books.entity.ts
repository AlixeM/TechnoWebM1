// book.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { IsNumber, Min, Max } from 'class-validator';
import { AuthorsEntity } from '../authors/authors.entity';
import { ReviewsEntity } from '../reviews/reviews.entity';

@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'mediumtext', nullable:false})
    titre: string;

    @Column({ type: 'int'}) // nullable so we can add books without knowing the year of publication
    @IsNumber()
    @Min(-3300) // First book published in 3300 B.C.
    @Max(new Date().getFullYear())
    annee_publication: number;

    @Column({ type: 'decimal', precision: 10, scale: 2}) // 2 decimal places max, nullable if th book is not currently available
    @Min(0)
    prix: number;

    // Relation Many-to-One with Author : a book belongs to an author
    @ManyToOne(() => AuthorsEntity, (author) => author.books, { nullable: false })
    author: AuthorsEntity;

    // Relation One-to-Many with Review : a book can have zero or many reviews
    @OneToMany(() => ReviewsEntity, (review) => review.book)
    reviews: ReviewsEntity[];
}

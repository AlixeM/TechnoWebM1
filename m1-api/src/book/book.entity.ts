// book.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
//import { AuthorsEntity } from '../authors/authors.entity';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', nullable:false})
    title: string;
    
    @Column({type: 'varchar', nullable:false})
    description: string;

    @Column({ type: 'varchar', nullable:false})
    publicationDate: string;

    @Column({ type: 'varchar'}) 
    price: string;

    // Relation Many-to-One with Author : a book belongs to an author
    /*
    @ManyToOne(() => AuthorsEntity, (author) => author.books, { nullable: false })
    author: AuthorsEntity;
    */
}

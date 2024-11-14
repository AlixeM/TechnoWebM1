/* eslint-disable prettier/prettier */
import { AuthorsEntity } from '../authors/authors.entity';
import { ReviewsEntity } from '../reviews/reviews.entity';

export class CreateBookDto {
  title: string;
  author: AuthorsEntity;
  publicationYear: number;
  reviews: ReviewsEntity[];
  price : number;
}

export class UpdateBookDto {
  title?: string;
  author?: AuthorsEntity;
  publicationYear?: number;
  reviews?: ReviewsEntity[];
  price? : number;
}

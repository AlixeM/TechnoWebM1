/* eslint-disable prettier/prettier */

export class CreateBookDto {
  title: string;
  authorId: number;
  publicationDate: Date;
  reviewIds: number[];
  price : number;
}

export class UpdateBookDto {
  title?: string;
  authorId?: number;
  publicationDate?: Date;
  reviewIds?: number[];
  price? : number;
}





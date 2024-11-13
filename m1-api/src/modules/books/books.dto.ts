/* eslint-disable prettier/prettier */
export class CreateBookDto {
  title: string;
  authorId: number;
  publicationYear: number;
}

export class UpdateBookDto {
  title?: string;
  authorId?: number;
  publicationYear?: number;
}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { ReviewsEntity } from './reviews.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ReviewsEntity])],
  providers: [ReviewsService],
  controllers: [ReviewsController]
})
export class ReviewsModule {}

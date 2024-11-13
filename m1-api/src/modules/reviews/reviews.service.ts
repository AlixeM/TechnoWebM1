/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewsEntity } from './reviews.entity';
import { CreateReviewsDto, UpdateReviewsDto } from './reviews.dto';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(ReviewsEntity)
        private reviewsRepository: Repository<ReviewsEntity>,
    ) { }

    create(createReviewsDto: CreateReviewsDto) {
        const Reviews = this.reviewsRepository.create(createReviewsDto);
        return this.reviewsRepository.save(Reviews);
    }

    findAll() {
        return this.reviewsRepository.find();
    }

    findOne(id: number) {
        return this.reviewsRepository.findOneBy({ id });
    }

    update(id: number, updateReviewsDto: UpdateReviewsDto) {
        return this.reviewsRepository.update(id, updateReviewsDto);
    }

    remove(id: number) {
        return this.reviewsRepository.delete(id);
    }
}

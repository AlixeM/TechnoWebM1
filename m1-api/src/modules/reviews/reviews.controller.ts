/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewsDto, UpdateReviewsDto } from './reviews.dto';

@Controller('Reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) { }

    @Post()
    create(@Body() createReviewsDto: CreateReviewsDto) {
        return this.reviewsService.create(createReviewsDto);
    }

    @Get()
    findAll() {
        return this.reviewsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.reviewsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateReviewsDto: UpdateReviewsDto) {
        return this.reviewsService.update(+id, updateReviewsDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.reviewsService.remove(+id);
    }
}
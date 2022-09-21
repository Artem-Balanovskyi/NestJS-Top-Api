import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SuccessResponse } from 'src/helpers/success.response';
import { DeleteReviewDto } from './dto/delete-review.dto';
import { SaveReviewDto } from './dto/save-review.dto';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {

	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {

	}

	@Delete(':id')
	async delete(@Param('id') id: string) {

	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {

	}
}
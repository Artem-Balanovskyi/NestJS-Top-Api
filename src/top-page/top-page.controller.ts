import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageModel } from './top-page.model';
import { TopPageModule } from './top-page.module';

@Controller('top-page')
export class TopPageController {
	constructor(private readonly configService: ConfigService) {}
	
	@Get('get/:alias')
	async get(@Param('alias') alias: string): Promise<TopPageModule> {
		this.configService.get('TEST');
	}

	@HttpCode(200)
	@Post('find')
	async getByCategory(@Body() dto: FindTopPageDto): Promise<FindTopPageResponse[]> {

	}

	@Post('save')
	async save(@Body() dto: SaveTopPageModelDto): Promise<TopPageModel> {

	}

	@Delete('delete')
	async delete(@Body() dto: DeleteTopPageDto): Promise<SuccessResponse> {
		
	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: TopPageModel) {
		
	}

	
}

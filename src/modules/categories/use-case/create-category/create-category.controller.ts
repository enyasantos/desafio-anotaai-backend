import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoriesDto } from '../../dtos/create-category.dto';
import { CreateCategoryService } from './create-category.service';

@Controller('api/category')
export class CreateCategoryController {
  constructor(private readonly createCategoryService: CreateCategoryService) {}
  @Post()
  async execute(@Body() body: CreateCategoriesDto) {
    return await this.createCategoryService.execute(body);
  }
}

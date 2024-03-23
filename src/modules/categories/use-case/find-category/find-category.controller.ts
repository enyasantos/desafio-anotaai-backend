import { Controller, Get, Param } from '@nestjs/common';
import { FindCategoryService } from './find-category.service';

@Controller('api/category')
export class FindCategoryController {
  constructor(private readonly findCategoryService: FindCategoryService) {}

  @Get('/:id')
  async execute(@Param('id') id: string) {
    return await this.findCategoryService.execute(id);
  }
}

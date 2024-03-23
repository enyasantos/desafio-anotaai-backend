import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateCategoriesDto } from '../../dtos/update-category.dto';
import { UpdateCategoryService } from './update-category.service';

@Controller('api/category')
export class UpdateCategoryController {
  constructor(private readonly updateCategoryService: UpdateCategoryService) {}

  @Put('/:id')
  async execute(@Body() body: UpdateCategoriesDto, @Param('id') id: string) {
    return await this.updateCategoryService.execute(body, id);
  }
}

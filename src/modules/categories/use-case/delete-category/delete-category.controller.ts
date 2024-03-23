import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteCategoryService } from './delete-category.service';

@Controller('api/category')
export class DeleteCategoryController {
  constructor(private readonly deleteCategoryService: DeleteCategoryService) {}

  @Delete('/:id')
  async execute(@Param('id') id: string) {
    return await this.deleteCategoryService.execute(id);
  }
}

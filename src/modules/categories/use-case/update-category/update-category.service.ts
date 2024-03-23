import { Injectable } from '@nestjs/common';
import { UpdateCategoriesDto } from '../../dtos/update-category.dto';
import { Category } from '../../entities/category.entity';
import { CategoriesRepository } from '../../repositories/category.repository';

@Injectable()
export class UpdateCategoryService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute(category: UpdateCategoriesDto, id: string) {
    const categoryObject = new Category(
      {
        title: category.title,
        owner: category.owner,
        description: category.description,
      },
      id,
    );

    return await this.categoriesRepository.update(id, categoryObject);
  }
}

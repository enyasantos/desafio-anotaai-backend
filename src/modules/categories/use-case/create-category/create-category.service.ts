import { Injectable } from '@nestjs/common';
import { CreateCategoriesDto } from '../../dtos/create-category.dto';
import { Category } from '../../entities/category.entity';
import { CategoriesRepository } from '../../repositories/category.repository';

@Injectable()
export class CreateCategoryService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute(category: CreateCategoriesDto) {
    const categoryObject = new Category({
      title: category.title,
      owner: category.owner,
      description: category.description,
    });
    return await this.categoriesRepository.create(categoryObject);
  }
}

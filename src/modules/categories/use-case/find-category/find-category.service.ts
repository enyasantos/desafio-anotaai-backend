import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../repositories/category.repository';

@Injectable()
export class FindCategoryService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute(id: string) {
    return await this.categoriesRepository.find(id);
  }
}

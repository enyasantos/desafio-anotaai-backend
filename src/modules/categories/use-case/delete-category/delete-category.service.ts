import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../repositories/category.repository';

@Injectable()
export class DeleteCategoryService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute(id: string) {
    return await this.categoriesRepository.delete(id);
  }
}

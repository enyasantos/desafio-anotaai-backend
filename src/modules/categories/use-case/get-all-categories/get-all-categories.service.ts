import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../repositories/category.repository';

@Injectable()
export class GellAllCategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute() {
    return await this.categoriesRepository.index();
  }
}

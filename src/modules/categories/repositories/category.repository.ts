import { IGenericRepository } from 'src/infra/database/mongoose/abstracts/generic-repository-abstract';
import { Category } from '../entities/category.entity';

export abstract class CategoriesRepository extends IGenericRepository<Category> {
  abstract upsert(id: string, item: Category): Promise<Category>;
}

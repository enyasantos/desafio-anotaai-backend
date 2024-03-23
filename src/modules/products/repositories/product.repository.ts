import { IGenericRepository } from 'src/infra/database/mongoose/abstracts/generic-repository-abstract';
import { Product } from '../entities/product.entity';

export abstract class ProductsRepository extends IGenericRepository<Product> {}

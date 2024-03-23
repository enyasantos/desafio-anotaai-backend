import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../../repositories/product.repository';

@Injectable()
export class GetAllProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute() {
    return await this.productsRepository.index();
  }
}

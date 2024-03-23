import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../../repositories/product.repository';

@Injectable()
export class FindProductService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute(id: string) {
    return await this.productsRepository.find(id);
  }
}

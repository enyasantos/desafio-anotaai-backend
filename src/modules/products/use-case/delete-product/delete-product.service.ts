import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../../repositories/product.repository';

@Injectable()
export class DeleteProductService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute(id: string) {
    return await this.productsRepository.delete(id);
  }
}

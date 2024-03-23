import { Injectable } from '@nestjs/common';
import { CreateProductsDto } from '../../dtos/create-product.dto';
import { Product } from '../../entities/product.entity';
import { ProductsRepository } from '../../repositories/product.repository';

@Injectable()
export class CreateProductService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute(product: CreateProductsDto) {
    const productObject = new Product({
      title: product.title,
      owner: product.owner,
      description: product.description,
      price: product.price,
      category: product.category,
    });
    return await this.productsRepository.create(productObject);
  }
}

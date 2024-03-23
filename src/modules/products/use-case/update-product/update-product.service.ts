import { Injectable } from '@nestjs/common';
import { UpdateProductsDto } from '../../dtos/update-product.dto';
import { Product } from '../../entities/product.entity';
import { ProductsRepository } from '../../repositories/product.repository';

@Injectable()
export class UpdateProductService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute(product: UpdateProductsDto, id: string) {
    const productObject = new Product(
      {
        title: product.title,
        owner: product.owner,
        description: product.description,
        price: product.price,
        category: product.category,
      },
      id,
    );
    return await this.productsRepository.update(id, productObject);
  }
}

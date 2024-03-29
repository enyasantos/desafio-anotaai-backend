import { Injectable } from '@nestjs/common';
import { Notification } from 'src/modules/publisher/entities/notification.entity';
import { NotificationService } from 'src/modules/publisher/use-case/publish-notification/publish-notification.service';
import { CreateProductsDto } from '../../dtos/create-product.dto';
import { Product } from '../../entities/product.entity';
import { ProductsRepository } from '../../repositories/product.repository';

@Injectable()
export class CreateProductService {
  constructor(
    private readonly productsRepository: ProductsRepository,
    private readonly notificationService: NotificationService,
  ) {}

  async execute(product: CreateProductsDto) {
    const productObject = new Product({
      title: product.title,
      owner: product.owner,
      description: product.description,
      price: product.price,
      category: product.category,
    });

    const response = await this.productsRepository.create(productObject);
    await this.notificationService.publish(
      new Notification(response.toString('create-product')),
      process.env.AWS_SNS_TOPIC_CATALOG_ARN,
    );
    return response;
  }
}

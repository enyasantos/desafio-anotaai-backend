import { Injectable } from '@nestjs/common';
import { Notification } from 'src/modules/publisher/entities/notification.entity';
import { NotificationService } from 'src/modules/publisher/use-case/publish-notification/publish-notification.service';
import { ProductsRepository } from '../../repositories/product.repository';

@Injectable()
export class DeleteProductService {
  constructor(
    private readonly productsRepository: ProductsRepository,
    private readonly notificationService: NotificationService,
  ) {}

  async execute(id: string) {
    const response = await this.productsRepository.delete(id);
    await this.notificationService.publish(
      new Notification(response.toString('delete-product')),
      process.env.AWS_SNS_TOPIC_CATALOG_ARN,
    );
    return response;
  }
}

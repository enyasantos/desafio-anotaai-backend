import { Injectable } from '@nestjs/common';
import { Notification } from 'src/modules/publisher/entities/notification.entity';
import { NotificationService } from 'src/modules/publisher/use-case/publish-notification/publish-notification.service';
import { CategoriesRepository } from '../../repositories/category.repository';

@Injectable()
export class DeleteCategoryService {
  constructor(
    private readonly categoriesRepository: CategoriesRepository,
    private readonly notificationService: NotificationService,
  ) {}

  async execute(id: string) {
    const response = await this.categoriesRepository.delete(id);
    await this.notificationService.publish(
      new Notification(response.toString('delete-category')),
      process.env.AWS_SNS_TOPIC_CATALOG_ARN,
    );
    return response;
  }
}

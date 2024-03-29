import { Injectable } from '@nestjs/common';
import { Notification } from 'src/modules/publisher/entities/notification.entity';
import { NotificationService } from 'src/modules/publisher/use-case/publish-notification/publish-notification.service';
import { CreateCategoriesDto } from '../../dtos/create-category.dto';
import { Category } from '../../entities/category.entity';
import { CategoriesRepository } from '../../repositories/category.repository';

@Injectable()
export class CreateCategoryService {
  constructor(
    private readonly categoriesRepository: CategoriesRepository,
    private readonly notificationService: NotificationService,
  ) {}

  async execute(category: CreateCategoriesDto) {
    const categoryObject = new Category({
      title: category.title,
      owner: category.owner,
      description: category.description,
    });
    const response = await this.categoriesRepository.create(categoryObject);
    await this.notificationService.publish(
      new Notification(response.toString('create-category')),
      process.env.AWS_SNS_TOPIC_CATALOG_ARN,
    );
    return response;
  }
}

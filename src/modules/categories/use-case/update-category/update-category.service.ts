import { Injectable } from '@nestjs/common';
import { Notification } from 'src/modules/publisher/entities/notification.entity';
import { NotificationService } from 'src/modules/publisher/use-case/publish-notification/publish-notification.service';
import { UpdateCategoriesDto } from '../../dtos/update-category.dto';
import { Category } from '../../entities/category.entity';
import { CategoriesRepository } from '../../repositories/category.repository';

@Injectable()
export class UpdateCategoryService {
  constructor(
    private readonly categoriesRepository: CategoriesRepository,
    private readonly notificationService: NotificationService,
  ) {}

  async execute(category: UpdateCategoriesDto, id: string) {
    const categoryObject = new Category(
      {
        title: category.title,
        owner: category.owner,
        description: category.description,
      },
      id,
    );
    const response = await this.categoriesRepository.update(id, categoryObject);
    await this.notificationService.publish(
      new Notification(response.toString('update-category')),
      process.env.AWS_SNS_TOPIC_CATALOG_ARN,
    );
    return response;
  }
}

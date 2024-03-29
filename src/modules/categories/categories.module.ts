import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/mongoose/mongodb.module';
import { PublisherModule } from '../publisher/publisher.module';
import { CreateCategoryController } from './use-case/create-category/create-category.controller';
import { CreateCategoryService } from './use-case/create-category/create-category.service';
import { DeleteCategoryController } from './use-case/delete-category/delete-category.controller';
import { DeleteCategoryService } from './use-case/delete-category/delete-category.service';
import { FindCategoryController } from './use-case/find-category/find-category.controller';
import { FindCategoryService } from './use-case/find-category/find-category.service';
import { GellAllCategoriesController } from './use-case/get-all-categories/get-all-categories.controller';
import { GellAllCategoriesService } from './use-case/get-all-categories/get-all-categories.service';
import { UpdateCategoryController } from './use-case/update-category/update-category.controller';
import { UpdateCategoryService } from './use-case/update-category/update-category.service';

@Module({
  imports: [DatabaseModule, PublisherModule],
  providers: [
    CreateCategoryService,
    UpdateCategoryService,
    DeleteCategoryService,
    GellAllCategoriesService,
    FindCategoryService,
  ],
  controllers: [
    CreateCategoryController,
    UpdateCategoryController,
    DeleteCategoryController,
    GellAllCategoriesController,
    FindCategoryController,
  ],
})
export class CategoriesModule {}

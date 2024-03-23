import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from 'src/infra/database/mongoose/schemas/category.schema';
import { MongooseCategoriesRepository } from 'src/modules/categories/infra/mongoose/repositories/categories.repository';
import { CategoriesRepository } from 'src/modules/categories/repositories/category.repository';
import { MongooseProductsRepository } from 'src/modules/products/infra/mongoose/repositories/product.repository';
import { ProductsRepository } from 'src/modules/products/repositories/product.repository';
import { ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Category', schema: CategorySchema },
      { name: 'Product', schema: ProductSchema },
    ]),
  ],
  providers: [
    {
      provide: CategoriesRepository,
      useClass: MongooseCategoriesRepository,
    },
    {
      provide: ProductsRepository,
      useClass: MongooseProductsRepository,
    },
  ],
  exports: [CategoriesRepository, ProductsRepository],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/mongoose/mongodb.module';
import { AwsModule } from '../aws/aws.module';
import { CreateProductController } from './use-case/create-product/create-product.controller';
import { CreateProductService } from './use-case/create-product/create-product.service';
import { DeleteProductController } from './use-case/delete-product/delete-product.controller';
import { DeleteProductService } from './use-case/delete-product/delete-product.service';
import { FindProductController } from './use-case/find-product/find-product.controller';
import { FindProductService } from './use-case/find-product/find-product.service';
import { GetAllProductController } from './use-case/get-all-products/get-all-product.controller';
import { GetAllProductsService } from './use-case/get-all-products/get-all-products.service';
import { UpdateProductController } from './use-case/update-product/update-product.controller';
import { UpdateProductService } from './use-case/update-product/update-product.service';

@Module({
  imports: [DatabaseModule, AwsModule],
  providers: [
    CreateProductService,
    DeleteProductService,
    FindProductService,
    GetAllProductsService,
    UpdateProductService,
  ],
  controllers: [
    CreateProductController,
    DeleteProductController,
    FindProductController,
    GetAllProductController,
    UpdateProductController,
  ],
})
export class ProductsModule {}

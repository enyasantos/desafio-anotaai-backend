import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ZodValidationPipe } from 'nestjs-zod';
import { CategoriesModule } from 'src/modules/categories/categories.module';
import { ProductsModule } from 'src/modules/products/products.module';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/marketplace-app?retryWrites=true&w=majority',
    ),
    CategoriesModule,
    ProductsModule,
  ],
  controllers: [],
})
export class AppModule {}

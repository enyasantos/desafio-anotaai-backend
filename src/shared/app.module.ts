import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ZodValidationPipe } from 'nestjs-zod';
import { CategoriesModule } from 'src/modules/categories/categories.module';
import { ConsumerModule } from 'src/modules/consumer/consumer.module';
import { ProductsModule } from 'src/modules/products/products.module';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    CategoriesModule,
    ProductsModule,
    ConsumerModule,
  ],
  controllers: [],
})
export class AppModule {}

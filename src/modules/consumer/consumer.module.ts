import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SqsModule } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';
import { CatalogsModule } from '../catalogs/catalogs.module';
import { CatalogEmitConsumerService } from '../consumer/use-case/catalog-emit-consumer/catalog-emit-consumer.service';

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

@Module({
  imports: [
    ConfigModule.forRoot(),
    SqsModule.register({
      consumers: [
        {
          name: process.env.AWS_SQS_QUEUE_NAME,
          queueUrl: process.env.AWS_SQS_QUEUE_URL,
          region: process.env.AWS_REGION,
        },
      ],
      producers: [],
    }),
    CatalogsModule,
  ],
  providers: [CatalogEmitConsumerService],
  exports: [],
  controllers: [],
})
export class ConsumerModule {}

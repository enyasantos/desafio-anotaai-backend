import { Injectable, Logger } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';
import CatalogModificationsService from 'src/modules/catalogs/use-case/catalog-modifications/catalog-modifications.service';
import {
  MessageCategoryCatalog,
  MessageProductCatalog,
} from '../../type/message-catalog.type';

@Injectable()
export class CatalogEmitConsumerService {
  private readonly logger = new Logger(CatalogEmitConsumerService.name);

  constructor(
    private readonly catalogModificationsService: CatalogModificationsService,
  ) {}

  @SqsMessageHandler(process.env.AWS_SQS_QUEUE_NAME, false)
  async consumeMessages(message: AWS.SQS.Message): Promise<unknown> {
    try {
      const objMessage: any = JSON.parse(message.Body) as {
        message: string;
        date: string;
      };
      const data: MessageProductCatalog | MessageCategoryCatalog = JSON.parse(
        objMessage.Message,
      );

      await this.catalogModificationsService.execute(data);

      this.logger.log(`Message consumed successfully: ${objMessage.Message}`);

      return 42;
    } catch (error) {
      this.logger.error(`Error publishing message: ${error}`);
      throw error;
    }
  }
}

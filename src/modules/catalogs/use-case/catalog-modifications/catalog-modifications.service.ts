import { Injectable, Logger } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import {
  MessageCategoryCatalog,
  MessageProductCatalog,
} from 'src/modules/consumer/type/message-catalog.type';
import { DeleteItemService } from '../delete-item/delete-item.service';
import { UpdateOrDeleteItemService } from '../update-or-add-item/update-or-delete-item.service';

@Injectable()
export default class CatalogModificationsService {
  private s3Service: AWS.S3;
  private readonly logger = new Logger(CatalogModificationsService.name);

  constructor(
    private readonly deleteItemService: DeleteItemService,
    private readonly updateOrDeleteItemService: UpdateOrDeleteItemService,
  ) {
    this.s3Service = new S3({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  async upload(bucket: string, file: any, key: string) {
    const params = {
      Bucket: bucket,
      Key: key,
      Body: file,
    };
    const uploadResponse = await this.s3Service.upload(params).promise();

    return { ...uploadResponse };
  }

  async get(bucket: string, key: string) {
    const params = {
      Bucket: bucket,
      Key: key,
    };
    return await this.s3Service.getObject(params).promise();
  }

  async execute(message: MessageProductCatalog | MessageCategoryCatalog) {
    const bucket = process.env.AWS_BUCKET_NAME;
    const key = `${message.owner}-catalog.json`;

    try {
      const catalog = await this.get(bucket, key);
      const catalogData = JSON.parse(catalog.Body.toString());

      if (
        message.type === 'update-product' ||
        message.type === 'create-product'
      ) {
        this.updateOrDeleteItemService.execute(catalogData.products, message);
      } else if (message.type === 'delete-product') {
        this.deleteItemService.execute(catalogData.products, message);
      } else if (
        message.type === 'update-category' ||
        message.type === 'create-category'
      ) {
        this.updateOrDeleteItemService.execute(catalogData.categories, message);
      } else if (message.type === 'delete-category') {
        this.deleteItemService.execute(catalogData.categories, message);
      }

      await this.upload(bucket, JSON.stringify(catalogData), key);

      this.logger.log(
        `Catalog modified successfully with action: ${message.type}`,
      );
    } catch (error) {
      if (error.message == 'The specified key does not exist.') {
        const newCatalog = { products: [], categories: [] };
        if (message.type.endsWith('product')) {
          newCatalog.products.push(message);
        } else {
          newCatalog.categories.push(message);
        }

        await this.upload(bucket, JSON.stringify(newCatalog), key);

        this.logger.log(
          `Catalog created successfully with action: ${message.type}`,
        );
      } else {
        throw error;
      }
    }
  }
}

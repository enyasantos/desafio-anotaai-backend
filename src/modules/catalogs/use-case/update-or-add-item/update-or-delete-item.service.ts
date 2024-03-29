import { Injectable } from '@nestjs/common';
import {
  MessageCategoryCatalog,
  MessageProductCatalog,
} from 'src/modules/consumer/type/message-catalog.type';

@Injectable()
export class UpdateOrDeleteItemService {
  constructor() {}
  async execute(
    catalog: MessageProductCatalog[] | MessageCategoryCatalog[],
    newItem: MessageProductCatalog | MessageCategoryCatalog,
  ) {
    const index = catalog.findIndex((item) => item.id === newItem.id);
    if (index !== -1) {
      catalog[index] = { ...catalog[index], ...newItem };
    } else {
      (catalog as any[]).push(newItem);
    }
  }
}

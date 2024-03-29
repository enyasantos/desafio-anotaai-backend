import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import CatalogModificationsService from './use-case/catalog-modifications/catalog-modifications.service';
import { DeleteItemService } from './use-case/delete-item/delete-item.service';
import { UpdateOrDeleteItemService } from './use-case/update-or-add-item/update-or-delete-item.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    CatalogModificationsService,
    DeleteItemService,
    UpdateOrDeleteItemService,
  ],
  exports: [CatalogModificationsService],
  controllers: [],
})
export class CatalogsModule {}

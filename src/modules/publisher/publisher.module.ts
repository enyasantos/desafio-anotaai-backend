import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationService } from './use-case/publish-notification/publish-notification.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [NotificationService],
  exports: [NotificationService],
  controllers: [],
})
export class PublisherModule {}

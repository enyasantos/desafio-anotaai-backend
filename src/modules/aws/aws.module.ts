import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SnsModule } from 'nest-sns';
import { NotificationService } from './use-case/publish-notification/publish-notification.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SnsModule.register({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    }),
  ],
  providers: [NotificationService],
  exports: [NotificationService],
  controllers: [],
})
export class AwsModule {}

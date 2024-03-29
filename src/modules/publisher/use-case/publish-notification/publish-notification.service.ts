import { Injectable, Logger } from '@nestjs/common';
import { SNS } from 'aws-sdk';
import { Notification } from '../../entities/notification.entity';

@Injectable()
export class NotificationService {
  private readonly snsService: SNS;
  private readonly logger = new Logger(NotificationService.name);

  constructor() {
    this.snsService = new SNS({
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
  }

  async publish(
    notification: Notification,
    topicArn: string,
  ): Promise<unknown> {
    try {
      const snsRes = await this.snsService
        .publish({
          Message: notification.message,
          TargetArn: topicArn,
        })
        .promise();
      this.logger.log(
        `Message published successfully: ${notification.message}`,
      );
      return snsRes;
    } catch (error) {
      this.logger.error(`Error publishing message: ${error}`);
      throw error;
    }
  }
}

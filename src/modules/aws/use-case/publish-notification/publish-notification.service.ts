import { Injectable } from '@nestjs/common';
import { SnsService } from 'nest-sns';
import { Notification } from '../../entities/notification.entity';

@Injectable()
export class NotificationService {
  constructor(private readonly snsService: SnsService) {}

  async publish(
    notification: Notification,
    topicArn: string,
  ): Promise<unknown> {
    const snsRes = await this.snsService.publish({
      Message: notification.message,
      TargetArn: topicArn,
    });
    return snsRes;
  }
}

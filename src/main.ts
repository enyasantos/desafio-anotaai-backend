import { NestFactory } from '@nestjs/core';
import { AppModule } from './shared/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['get', 'post', 'put', 'delete', 'patch', 'head'],
  });

  const port = process.env.PORT || 3008;

  await app.listen(port).then(() => {
    console.log(`SVC listening on ${port}`);
  });
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // change port to 5000 in Backend
  await app.listen(5000);
}
bootstrap();

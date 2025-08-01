import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  await app.listen(4000);
}
bootstrap().catch((err) => {
  console.error('Error during bootstrap:', err);
});

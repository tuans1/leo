import { NestFactory } from '@nestjs/core';
import { AppModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, './proto/user.proto'),
      url: '0.0.0.0:5000',
    },
  });

  console.log(process.env.DB_PORT);
  await app.startAllMicroservices();
  await app.listen(4001);
}
bootstrap().catch((err) => {
  console.error('Error during bootstrap:', err);
});

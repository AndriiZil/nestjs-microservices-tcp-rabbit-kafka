import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice({
  //   transport: Transport.TCP,
  //   options: {
  //     port: 3003,
  //   },
  // });
  // await app.startAllMicroservices();
  // await app.listen(3003);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3003,
      }
    },
  );
  await app.listen();
}
bootstrap();

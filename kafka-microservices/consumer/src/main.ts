import { NestFactory } from '@nestjs/core';
import { Partitioners } from 'kafkajs';
import { AppModule } from './app.module';
import { KafkaOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<KafkaOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'consumer_1',
          brokers: ['localhost:9092'],
        },
        producer: {
          createPartitioner: Partitioners.LegacyPartitioner
        },
        consumer: {
          groupId: 'test-group'
        }
      },
    },
  );
  await app.listen();
}
bootstrap();

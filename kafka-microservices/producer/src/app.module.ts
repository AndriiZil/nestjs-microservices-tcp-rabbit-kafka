import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Partitioners } from 'kafkajs';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEST_PRODUCER',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'producer_1',
            brokers: ['localhost:9092'],
          },
          producer: {
            createPartitioner: Partitioners.LegacyPartitioner
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
      {
        name: 'DRIVER_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
      {
        name: 'TASK_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3003 },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}

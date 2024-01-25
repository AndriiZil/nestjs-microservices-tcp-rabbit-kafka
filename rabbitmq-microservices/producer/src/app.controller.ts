import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('CAR_SERVICE') private client: ClientProxy,
  ) {}
  @Post('publish')
  publish() {
    this.client.emit('notifications', { message: 'data' });
  }
}

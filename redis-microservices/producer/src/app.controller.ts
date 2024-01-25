import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('AUTH_SERVICE') private client: ClientProxy) {}
  @Post('publish')
  async publishMessage() {
    return this.client.send('auth', { token: '123' });
    // this.client.emit('auth', { token: '123' });
  }
}

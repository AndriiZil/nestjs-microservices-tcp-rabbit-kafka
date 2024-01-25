import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'register_user' })
  async registerUser(@Payload() message: any) {
    console.log({ message });
    return message;
  }
}

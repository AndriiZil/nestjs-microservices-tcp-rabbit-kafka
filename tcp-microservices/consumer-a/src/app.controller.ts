import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern({ cmd: 'send_driver' })
  async driver(@Payload() message: any) {
    console.log({ name: 'DRIVER_MICROSERVICE', message });
    return message;
  }
}

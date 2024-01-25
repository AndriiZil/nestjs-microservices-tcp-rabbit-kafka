import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern({ cmd: 'send_task' })
  async task(@Payload() message: any) {
    console.log({ name: 'TASK_MICROSERVICE', message });
    return message;
  }
}

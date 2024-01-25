import { Controller } from '@nestjs/common';
import {
  Ctx,
  Payload,
  NatsContext,
  MessagePattern,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('auth')
  getDate(@Payload() data: number[], @Ctx() context: NatsContext) {
    console.log({ context });
    console.log({ data });
    return data;
  }
}

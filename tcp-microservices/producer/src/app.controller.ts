import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('DRIVER_MICROSERVICE') private readonly driversClient: ClientProxy,
    @Inject('USER_MICROSERVICE') private readonly usersClient: ClientProxy,
    @Inject('TASK_MICROSERVICE') private readonly tasksClient: ClientProxy,
  ) {}
  @Post('register-user')
  sendUser(@Body() userData) {
    return this.usersClient.send({ cmd: 'register_user' }, userData)
  }

  @Post('send-batch')
  async sendBatch(@Body() data) {
    await Promise.all([
      this.driversClient.emit({ cmd: 'send_driver' }, data),
      this.tasksClient.emit({ cmd: 'send_task' }, data)
    ]);

    return {
      message: 'success',
    };
  }
}


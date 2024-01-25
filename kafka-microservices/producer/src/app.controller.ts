import { Controller, Inject, Post } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('TEST_PRODUCER') private readonly client: ClientKafka) {}

  async onModuleInit() {
    this.client.subscribeToResponseOf('test');
    await this.client.connect();
  }


  @Post('kafka-test')
  testKafka(){
    return this.client.emit('test', { foo:'async', data: new Date().toString() })
  }

  @Post('kafka-test-with-response')
  testKafkaWithResponse(){
    return this.client.send('test', { foo:'response', data: new Date().toString() })
  }
}

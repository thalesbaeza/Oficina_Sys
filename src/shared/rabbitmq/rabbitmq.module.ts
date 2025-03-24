import { RabbitMQModule as RabbitMQModuleN } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';
import { RabbitMqService } from './rabbitmq.service';

@Global()
@Module({
  imports: [
    RabbitMQModuleN.forRoot({
      exchanges: [
        {
          name: 'mechanic',
          type: 'topic',
        },
      ],
      uri: 'amqp://guest:guest@localhost:5672',
      connectionInitOptions: { wait: false },
    }),
  ],
  exports: [RabbitMqService],
  providers: [RabbitMqService],
})
export class RabbitMQModule {}

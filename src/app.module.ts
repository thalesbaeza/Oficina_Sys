import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CashFlowModule } from './cash-flow/cash-flow.module';
import { ClientModule } from './client/client.module';
import { DatabaseModule } from './database/database.module';
import { RabbitMQModule } from './shared/rabbitmq/rabbitmq.module';

@Module({
  imports: [
    ClientModule,
    CashFlowModule,
    DatabaseModule,
    ConfigModule.forRoot(),
    RabbitMQModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

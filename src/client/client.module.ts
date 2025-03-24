import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DimCustomer } from './entities/dim-customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DimCustomer])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CashFlowController } from './cash-flow.controller';
import { CashFlowService } from './cash-flow.service';
import {
  DimCarModel,
  DimDate,
  DimTransactionType,
  FactTransaction,
} from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DimCarModel,
      DimDate,
      DimTransactionType,
      FactTransaction,
    ]),
  ],
  controllers: [CashFlowController],
  providers: [CashFlowService],
})
export class CashFlowModule {}

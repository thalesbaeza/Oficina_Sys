import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DimCarModel,
  DimDate,
  DimTransactionType,
  FactTransaction,
} from 'src/cash-flow/entities';
import { DimCustomer } from 'src/client/entities/dim-customer.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          host: process.env.TYPEORM_HOST,
          username: process.env.TYPEORM_USERNAME,
          password: process.env.TYPEORM_PASSWORD,
          database: process.env.TYPEORM_DATABASE,
          port: parseInt(process.env.TYPEORM_PORT),
          synchronize: true,
          dropSchema: true,
          name: 'default',
          entities: [
            DimCarModel,
            DimCustomer,
            DimDate,
            DimTransactionType,
            FactTransaction,
          ],
          migrationsRun: false,
          keepConnectionAlive: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { DimCarModel, DimTransactionType, DimDate } from '../entities';
import { DimCustomer } from '../../client/entities/dim-customer.entity';

@Entity('fact_transaction')
export class FactTransaction {
  @PrimaryGeneratedColumn()
  transaction_id: number;

  @ManyToOne(() => DimCarModel, (carModel) => carModel.transactions)
  @JoinColumn({ name: 'car_model_id' })
  carModel: DimCarModel;

  @ManyToOne(() => DimCustomer, (customer) => customer.transactions)
  @JoinColumn({ name: 'customer_id' })
  customer: DimCustomer;

  @ManyToOne(
    () => DimTransactionType,
    (transactionType) => transactionType.transactions,
  )
  @JoinColumn({ name: 'transaction_type_id' })
  transactionType: DimTransactionType;

  @ManyToOne(() => DimDate, (date) => date.transactions)
  @JoinColumn({ name: 'transaction_date_id' })
  transactionDate: DimDate;

  @Column('int')
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  transaction_value: number;

  @Column('decimal', { precision: 10, scale: 2 })
  profit: number;
}

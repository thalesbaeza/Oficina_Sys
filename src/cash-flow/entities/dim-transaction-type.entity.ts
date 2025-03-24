import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { FactTransaction } from './fact-transaction.entity';

@Entity('dim_transaction_type')
export class DimTransactionType {
  @PrimaryGeneratedColumn()
  transaction_type_id: number;

  @Column()
  transaction_type_name: string;

  @Column('text')
  description: string;

  @OneToMany(
    () => FactTransaction,
    (transaction) => transaction.transactionType,
  )
  transactions: FactTransaction[];
}

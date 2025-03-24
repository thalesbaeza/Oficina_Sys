import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { FactTransaction } from './fact-transaction.entity';

@Entity('dim_date')
export class DimDate {
  @PrimaryGeneratedColumn()
  date_id: number;

  @Column('date')
  date: string;

  @Column('int')
  day: number;

  @Column('int')
  month: number;

  @Column('int')
  year: number;

  @Column('int')
  quarter: number;

  @OneToMany(
    () => FactTransaction,
    (transaction) => transaction.transactionDate,
  )
  transactions: FactTransaction[];
}

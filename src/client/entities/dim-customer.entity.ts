import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { FactTransaction } from '../../cash-flow/entities';

@Entity('dim_customer')
export class DimCustomer {
  @PrimaryGeneratedColumn()
  customer_id: number;

  @Column()
  customer_name: string;

  @Column()
  customer_phone: string;

  @Column()
  customer_email: string;

  @Column()
  customer_address: string;

  @OneToMany(() => FactTransaction, (transaction) => transaction.customer)
  transactions: FactTransaction[];
}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { FactTransaction } from './fact-transaction.entity';

@Entity('dim_car_model')
export class DimCarModel {
  @PrimaryGeneratedColumn()
  car_model_id: number;

  @Column()
  car_model_name: string;

  @Column()
  car_brand: string;

  @Column('int')
  car_year: number;

  @OneToMany(() => FactTransaction, (transaction) => transaction.carModel)
  transactions: FactTransaction[];
}

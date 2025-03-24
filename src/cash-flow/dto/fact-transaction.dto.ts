import { IsInt, IsPositive, IsDecimal } from 'class-validator';

export class FactTransactionDto {
  @IsInt()
  @IsPositive()
  car_model_id: number;

  @IsInt()
  @IsPositive()
  customer_id: number;

  @IsInt()
  @IsPositive()
  transaction_date_id: number;

  @IsInt()
  @IsPositive()
  transaction_type_id: number;

  @IsInt()
  @IsPositive()
  quantity: number;

  @IsDecimal()
  @IsPositive()
  transaction_value: number;

  @IsDecimal()
  @IsPositive()
  profit: number;
}

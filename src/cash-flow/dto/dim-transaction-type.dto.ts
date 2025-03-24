import { IsString, IsNotEmpty } from 'class-validator';

export class DimTransactionTypeDto {
  @IsString()
  @IsNotEmpty()
  transaction_type_name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

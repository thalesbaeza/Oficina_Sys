import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator';

export class DimCustomerDto {
  @IsString()
  @IsNotEmpty()
  customer_name: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  customer_phone: string;

  @IsEmail()
  @IsNotEmpty()
  customer_email: string;

  @IsString()
  @IsNotEmpty()
  customer_address: string;
}

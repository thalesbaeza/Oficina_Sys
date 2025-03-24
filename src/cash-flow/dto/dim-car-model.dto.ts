import { IsString, IsInt, IsNotEmpty, Min } from 'class-validator';

export class DimCarModelDto {
  @IsString()
  @IsNotEmpty()
  car_model_name: string;

  @IsString()
  @IsNotEmpty()
  car_brand: string;

  @IsInt()
  @Min(1900)
  car_year: number;
}

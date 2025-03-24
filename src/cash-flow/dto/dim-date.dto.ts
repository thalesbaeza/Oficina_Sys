import { IsInt, IsDateString, IsNotEmpty, Min } from 'class-validator';

export class DimDateDto {
  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsInt()
  @Min(1)
  day: number;

  @IsInt()
  @Min(1)
  month: number;

  @IsInt()
  @Min(1900)
  year: number;

  @IsInt()
  @Min(1)
  quarter: number;
}

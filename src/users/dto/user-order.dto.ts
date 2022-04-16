import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class userOrderDto {
  @IsString()
  @IsNotEmpty()
  bookId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}

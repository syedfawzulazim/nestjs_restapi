import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BookSchema } from './books.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}

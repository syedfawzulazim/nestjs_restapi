import { BooksDto } from './dto/books.dto';
import { BooksService } from './books.service';
import { Controller, Post, Body, Get } from '@nestjs/common';

@Controller('api/v1/books')
export class BooksController {
  //instantiate the book service in book controller
  constructor(private readonly booksService: BooksService) {}

  //add books to database
  @Post()
  async addBooks(@Body() dto: BooksDto) {
    const bookTitle = await this.booksService.insertBook(
      dto.title,
      dto.description,
      dto.price,
    );
    return {
      message: `${bookTitle} is added to Database`,
    };
  }

  //gets all the books from database
  @Get()
  async getAllBooks() {
    const books = await this.booksService.getAllBooks();
    return books;
  }
}

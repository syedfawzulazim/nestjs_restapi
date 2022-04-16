import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Book } from './books.model';

@Injectable()
export class BooksService {
  //inject & instantiate Book Model from mongoose
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  //inserts a book to the database
  async insertBook(title: string, description: string, price: number) {
    const newBook = new this.bookModel({ title, description, price });
    try {
      const savedBook = await newBook.save();
      return savedBook.title as string;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  //gets all the books from the database
  async getAllBooks() {
    try {
      const books = await this.bookModel.find().exec();
      return books as Book[];
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}

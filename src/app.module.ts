import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BooksModule } from './books/books.module';
import { UserModule } from './users/user.module';

import { AuthModule } from './auth/auth.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [
    BooksModule,
    AuthModule,
    UserModule,
    PurchaseModule,
    MongooseModule.forRoot(
      'mongodb+srv://adnansparrow:<password>@cluster01.b7yso.mongodb.net/BookkeepingDB?retryWrites=true&w=majority',
    ),
    PurchaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { AuthModule } from './../auth/auth.module';
import { PurchaseModule } from '../purchase/purchase.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from 'src/auth/auth.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Auth', schema: AuthSchema }]),
    PurchaseModule,
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}

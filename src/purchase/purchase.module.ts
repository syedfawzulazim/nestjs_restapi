import { PurchaseController } from './purchase.controller';
import { Module } from '@nestjs/common';
import { PurchaseSchema } from './purchase.model';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseService } from './purchase.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Purchase', schema: PurchaseSchema }]),
  ],
  controllers: [PurchaseController],
  providers: [PurchaseService],
  exports: [PurchaseService],
})
export class PurchaseModule {}

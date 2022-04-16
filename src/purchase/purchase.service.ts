import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Purchase } from './purchase.model';
import { Model } from 'mongoose';

@Injectable()
export class PurchaseService {
  //inject Mongoose Purchase Model
  constructor(
    @InjectModel('Purchase') private readonly purchaseModel: Model<Purchase>,
  ) {}

  //get all the oders of a user by user ID
  async getOrderByUser(userId: string): Promise<Purchase[]> {
    try {
      const orders = await this.purchaseModel.find({ userId });
      return orders as Purchase[];
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal Server Error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //creates order from a user
  async takeOrder({ userId, bookId, title, quantity }: Purchase) {
    const createNewOrder = new this.purchaseModel({
      userId,
      bookId,
      title,
      quantity,
    });
    try {
      const savedOrder = await createNewOrder.save();
      return savedOrder;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal Server Error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //deletes all the orders of a user
  async deleteOrder(userId: string) {
    try {
      const deletedOrderCount = await this.purchaseModel.deleteMany({ userId });
      if (deletedOrderCount.deletedCount === 0) {
        return { message: 'Item not found' };
      }
      return { message: `${deletedOrderCount.deletedCount} Items Deleted` };
    } catch (error) {
      return new InternalServerErrorException();
    }
  }

  //updates a order if found in the database
  async updateOrder(
    orderId: string,
    bookId: string,
    title: string,
    quantity: number,
  ) {
    try {
      const order = await this.purchaseModel.findById(orderId);
      if (!order) {
        throw new NotFoundException('Cound not find the order');
      }
      if (bookId) order.bookId = bookId;
      if (title) order.title = title;
      if (quantity) order.quantity = quantity;
      await order.save();
      return order;
    } catch (error) {
      throw new NotFoundException('Could not find order.');
    }
  }
}

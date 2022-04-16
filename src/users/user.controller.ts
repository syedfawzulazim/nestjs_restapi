import { UserService } from './user.service';
import { PurchaseService } from '../purchase/purchase.service';
import {
  Controller,
  Get,
  UseGuards,
  Post,
  Body,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { userOrderDto } from './dto';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  //instantiate PurchaseService in the constructor
  constructor(
    private purchaseService: PurchaseService,
    private userService: UserService,
  ) {}

  //get all orders of the user
  @Get('orders')
  async getUserOrders(@GetUser() user: { sub: string }) {
    const order = await this.purchaseService.getOrderByUser(user.sub);
    return order;
  }

  //take user order
  @Post('purchase')
  async bookPurchase(
    @GetUser() user: { sub: string; email: string },
    @Body() dto: userOrderDto,
  ) {
    const order = await this.purchaseService.takeOrder({
      userId: user.sub,
      bookId: dto.bookId,
      title: dto.title,
      quantity: dto.quantity,
    });

    return { order, message: 'Order Completed' };
  }

  //delete all user's order
  @Delete('delete-order')
  async deletePurchase(@GetUser() user: { sub: string; email: string }) {
    const deletedOrdersCount = await this.purchaseService.deleteOrder(user.sub);
    return deletedOrdersCount;
  }

  //update single order by orderID
  @Patch('orders/update/:orderId')
  async updatePurchaseOrder(
    @Param('orderId') orderId: string,
    @Body() dto: userOrderDto,
  ) {
    const updatedOrder = await this.purchaseService.updateOrder(
      orderId,
      dto.bookId,
      dto.title,
      dto.quantity,
    );
    return updatedOrder;
  }

  @Get('userslist')
  async getAllTheUsers() {
    const allUsers = await this.userService.getAllTheUsers();
    return allUsers;
  }
}

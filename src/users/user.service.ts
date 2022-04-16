import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('Auth') private readonly authModel: Model<Auth>) {}

  //gets all the users from the database
  async getAllTheUsers() {
    try {
      const allUsers = await this.authModel.find({}, 'email');
      return {
        allUsers,
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}

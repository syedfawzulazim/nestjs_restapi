import * as argon from 'argon2';
import { Model } from 'mongoose';
import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { AuthDto } from './dto';
import { Auth } from './auth.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Auth') private readonly authModel: Model<Auth>,
    private readonly jwt: JwtService,
  ) {}

  async singup(dto: AuthDto) {
    try {
      //check if email is taken or not
      const user = await this.authModel.findOne({ email: dto.email }).exec();
      if (user) {
        throw new HttpException('Email Address Taken...', HttpStatus.CONFLICT);
      }

      //hashed password
      const hash = await argon.hash(dto.password);

      //create user to DB
      const createUser = new this.authModel({
        email: dto.email,
        password: hash,
      });

      const newUser = await createUser.save();

      return this.signToken(newUser.id, newUser.email);
    } catch (error) {
      throw error;
    }
  }

  async singin(dto: AuthDto) {
    try {
      //find user by email address
      const user = await this.authModel.findOne({ email: dto.email });
      if (!user) {
        throw new NotFoundException();
      }

      //if email found match password
      const pwMatch = await argon.verify(user.password, dto.password);

      if (user && pwMatch) {
        return this.signToken(user.id, user.email);
      } else throw new ForbiddenException();
    } catch (error) {
      throw error;
    }
  }

  //for json web token
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    try {
      const token = await this.jwt.signAsync(payload, {
        expiresIn: '200m',
        secret: 'secret-key-signature',
      });
      return {
        access_token: token,
      };
    } catch (error) {
      throw error;
    }
  }
}

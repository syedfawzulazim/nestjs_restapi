import { JwtStrategy } from './strategy/jwt.strategy';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthSchema } from './auth.model';

@Module({
  imports: [
    JwtModule.register({}),
    MongooseModule.forFeature([{ name: 'Auth', schema: AuthSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

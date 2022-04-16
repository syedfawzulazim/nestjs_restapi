import { AuthDto } from './dto';
import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() dto: AuthDto) {
    return await this.authService.singup(dto);
  }

  @Post('signin')
  async signin(@Body() dto: AuthDto) {
    return await this.authService.singin(dto);
  }
}

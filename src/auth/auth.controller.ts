import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from 'src/auth/auth.service';
import { SigninDto } from 'src/auth/dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }
}

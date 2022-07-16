import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { LoginDto } from './dto/login.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.accountService.login(loginDto);
  }
}

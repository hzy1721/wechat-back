import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id/friends')
  findAllFriends(@Param('id') id: number) {
    
  }

  @Get(':id/groups')
  findAllGroups(@Param('id') id: number) {

  }
}

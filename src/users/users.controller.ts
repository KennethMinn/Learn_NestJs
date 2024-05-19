import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') //users -> like a prefix route
export class UsersController {
  //const usersService = new UsersService()
  constructor(private readonly usersService: UsersService) {}

  //routers goes from top to bottom

  // /users or users?role=admin
  @Get()
  findAll(@Query('role') role?: 'admin' | 'user') {
    return this.usersService.findAll(role);
  }

  // /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id); // +"1" -> 1
  }

  // /users
  @Post()
  create(
    @Body() user: { name: string; email: string; role: 'admin' | 'user' },
  ) {
    return this.usersService.create(user);
  }

  // /users/:id
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() user: { name?: string; email?: string; role?: 'admin' | 'user' },
  ) {
    return this.usersService.update(+id, user);
  }

  // /users/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}

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

@Controller('users') //users -> like a prefix route
export class UsersController {
  //routers goes from top to bottom

  // /users or users?role=admin
  @Get()
  findAll(@Query('role') role?: 'admin' | 'user') {
    return [{ role }];
  }

  // /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  // /users
  @Post()
  create(@Body() user: { name: string }) {
    return user;
  }

  // /users/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() user: { name: string }) {
    return { id, ...user };
  }

  // /users/:id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}

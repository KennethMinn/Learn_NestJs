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

  @Get() // /users or users?role=admin
  findAll(@Query('role') role?: 'admin' | 'user') {
    return [{ role }];
  }

  @Get(':id') // /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // /users
  create(@Body() user: { name: string }) {
    return user;
  }

  @Patch(':id') // /users/:id
  update(@Param('id') id: string, @Body() user: { name: string }) {
    return { id, ...user };
  }

  @Delete(':id') // /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}

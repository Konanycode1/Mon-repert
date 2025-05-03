import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from '../core/use-case/user.service';
import { UserCreateDto } from '../core/dto/user.create.dto';
import { UserUpdateDto } from '../core/dto/user.update.dto';
@Controller({
  path: 'users',
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(
    @Body() userCreateDto: UserCreateDto,
    @Res() res: Response
  ): Promise<Response> {
    const user = await this.userService.create(userCreateDto);
    return res.status(201).json(user);
  }

  @Get('find-all')
  async findAll(
    @Res() res: Response
  ): Promise<Response> {
    const users = await this.userService.findAll();
    return res.status(200).json(users);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return true
  }

  @Get('user/:id')
  findByUserId(@Param('id') id: string) {
    return true
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UserUpdateDto) {
    return true
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return true
  }
}

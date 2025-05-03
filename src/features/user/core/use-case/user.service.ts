import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from 'features/user/core/interface/user.interface';
import { UserCreateDto } from 'features/user/core/dto/user.create.dto';
import { UserRepository } from 'features/user/outBound/user.repository';

@Injectable()
export class UserService {
  constructor(
   private readonly userRepository: UserRepository
  ) {}

  async create(createUserDto: UserCreateDto): Promise<User> {
    const createdCat =   await this.userRepository.create(createUserDto);
    return createdCat
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
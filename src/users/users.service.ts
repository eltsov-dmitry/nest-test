import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create.users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async getAll() {
    const users = await this.userRepository.find();
    console.log(users);
    return await this.userRepository.find();
  }

  async create(createUsersDto: CreateUsersDto) {
    return await this.userRepository.save(createUsersDto);
  }
}

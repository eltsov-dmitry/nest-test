import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update.user.dto';
import { not, toBool } from '../libs/helpers';
import { MessageException } from '../exceptions/message.exception';
import { messages } from '../libs/messages';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(userBody: CreateUserDto) {
    const isEmailExists = await this.isEmailExists(userBody.email);

    if (isEmailExists) {
      throw new MessageException(messages.EmailAlreadyExists);
    }
    return this.userRepository.save(userBody);
  }

  async findAll() {
    return this.userRepository.find({ relations: { projects: true } });
  }

  async findOneById(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: { projects: true },
    });
    if (not(toBool(user))) {
      throw new MessageException(messages.UserNotFound);
    }
    return user;
  }

  async update(id: number, userBody: UpdateUserDto) {
    const user = await this.findOneById(id);
    const isUpdatedEmail = userBody.email && user.email !== userBody.email;
    const isEmailExists = await this.isEmailExists(userBody.email);

    if (isUpdatedEmail && isEmailExists) {
      throw new MessageException(messages.EmailAlreadyExists);
    }
    return this.userRepository.save({ ...user, ...userBody });
  }

  async remove(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    await this.userRepository.remove(user);
    return this.findAll();
  }

  async isEmailExists(email: string) {
    return toBool(this.userRepository.findOneBy({ email }));
  }
}

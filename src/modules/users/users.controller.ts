import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Создать пользователя' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @ApiBody({ type: CreateUserDto })
  async create(@Body() userBody: CreateUserDto): Promise<User> {
    return this.usersService.create(userBody);
  }

  @Get()
  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ status: HttpStatus.OK, type: [User] })
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить пользователя' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  async findOne(@Param('id') id: string) {
    return this.usersService.findOneById(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Редактировать пользователя' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  async update(
    @Param('id') id: string,
    @Body() userBody: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.update(+id, userBody);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить пользователя' })
  @ApiResponse({ status: HttpStatus.OK, type: [User] })
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}

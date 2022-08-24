import { Injectable } from '@nestjs/common';
import { CreateBlockTopDto } from './dto/create-block-top.dto';
import { UpdateBlockTopDto } from './dto/update-block-top.dto';

@Injectable()
export class BlockTopService {
  create(createBlockTopDto: CreateBlockTopDto) {
    return 'This action adds a new blockTop';
  }

  findAll() {
    return `This action returns all blockTop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blockTop`;
  }

  update(id: number, updateBlockTopDto: UpdateBlockTopDto) {
    return `This action updates a #${id} blockTop`;
  }

  remove(id: number) {
    return `This action removes a #${id} blockTop`;
  }
}

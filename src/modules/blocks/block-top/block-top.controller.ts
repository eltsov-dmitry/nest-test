import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlockTopService } from './block-top.service';
import { CreateBlockTopDto } from './dto/create-block-top.dto';
import { UpdateBlockTopDto } from './dto/update-block-top.dto';

@Controller('block-top')
export class BlockTopController {
  constructor(private readonly blockTopService: BlockTopService) {}

  @Post()
  create(@Body() createBlockTopDto: CreateBlockTopDto) {
    return this.blockTopService.create(createBlockTopDto);
  }

  @Get()
  findAll() {
    return this.blockTopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blockTopService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlockTopDto: UpdateBlockTopDto) {
    return this.blockTopService.update(+id, updateBlockTopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blockTopService.remove(+id);
  }
}

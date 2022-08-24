import { Module } from '@nestjs/common';
import { BlockTopService } from './block-top.service';
import { BlockTopController } from './block-top.controller';

@Module({
  controllers: [BlockTopController],
  providers: [BlockTopService]
})
export class BlockTopModule {}

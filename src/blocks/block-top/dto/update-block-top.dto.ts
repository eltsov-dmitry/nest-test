import { PartialType } from '@nestjs/swagger';
import { CreateBlockTopDto } from './create-block-top.dto';

export class UpdateBlockTopDto extends PartialType(CreateBlockTopDto) {}

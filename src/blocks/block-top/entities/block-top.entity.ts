import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { swaggerPropertyOptions } from '../../../libs/swagger-property-options';
import { ImageField } from '../../../interfaces/block.interface';

@Entity('block-top')
export class BlockTop {
  @ApiProperty(swaggerPropertyOptions.id)
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty(swaggerPropertyOptions.block.image)
  @Column()
  image: ImageField;
}

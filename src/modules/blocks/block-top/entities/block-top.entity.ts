import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { swaggerPropertyOptions } from '../../../../libs/swagger-property-options';
import { Project } from '../../../projects/entities/project.entity';

@Entity('block-top')
export class BlockTop {
  @ApiProperty(swaggerPropertyOptions.id)
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty(swaggerPropertyOptions.block.image)
  @Column()
  image: string;

  @OneToOne(() => Project)
  @JoinColumn()
  project: Project;
}

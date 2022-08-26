import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';
import { swaggerPropertyOptions as swagger } from '../../../libs/swagger-property-options';
import { BlockTop } from '../../blocks/block-top/entities/block-top.entity';

@Entity('project')
export class Project {
  @ApiProperty(swagger.id)
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty(swagger.project.title)
  @Column({ default: 'Мой проект' })
  title: string;

  @ApiProperty(swagger.project.name_male)
  @Column()
  name_male: string;

  @ApiProperty(swagger.project.name_female)
  @Column()
  name_female: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;

  @OneToOne(() => BlockTop)
  @JoinColumn()
  project: BlockTop;
}

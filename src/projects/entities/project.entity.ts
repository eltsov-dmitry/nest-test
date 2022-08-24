import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';
import { swaggerPropertyOptions as swagger } from '../../libs/swagger-property-options';

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
  nameMale: string;

  @ApiProperty(swagger.project.name_female)
  @Column()
  nameFemale: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user: User;
}

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Project } from '../../projects/entities/project.entity';
import { swaggerPropertyOptions as swagger } from '../../libs/swagger-property-options';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

@Entity('user')
export class User {
  @ApiProperty(swagger.id)
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty(swagger.user.email)
  @Column({ unique: true })
  email: string;

  @ApiProperty(swagger.user.password)
  @Column()
  password: string;

  @ApiModelProperty({ type: [Project] })
  @OneToMany(() => Project, (project) => project.user, { cascade: true })
  projects: Project;
}

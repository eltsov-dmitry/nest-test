import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { IsOptional, IsString } from 'class-validator';
import { messages } from '../../../libs/messages';
import { swaggerPropertyOptions as swagger } from '../../../libs/swagger-property-options';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @ApiProperty(swagger.project.title)
  @IsString({ message: 'title' + messages.isString })
  @IsOptional()
  title: string;

  @ApiProperty(swagger.project.name_male)
  @IsString({ message: 'name_male' + messages.isString })
  @IsOptional()
  name_male: string;

  @ApiProperty(swagger.project.name_female)
  @IsString({ message: 'name_female' + messages.isString })
  @IsOptional()
  name_female: string;
}

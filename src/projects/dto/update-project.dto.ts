import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { swaggerPropertyOptions as swagger } from '../../libs/swagger-property-options';
import { IsNotEmpty, IsString } from 'class-validator';
import { messages } from '../../libs/messages';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  @ApiProperty(swagger.project.title)
  @IsString({ message: messages.isString })
  @IsNotEmpty({ message: messages.IsNotEmpty })
  title: string;
}
